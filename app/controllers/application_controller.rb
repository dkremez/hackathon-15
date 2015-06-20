class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  #before_action :authenticate_user_from_token!

  respond_to :json
  
  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:username, :password, :remember_me)  }
  end

  def authenticate_user_from_token!
    auth_token = request.headers['Authorization']

    if auth_token
      authenticate_with_auth_token auth_token
    else
      authentication_error
    end
  end

  private

  def authenticate_with_auth_token auth_token
    unless auth_token.include?(':')
      authentication_error
      return
    end

    user_id = auth_token.split(':').first
    user = User.find(user_id)

    if user && Devise.secure_compare(user.access_token, auth_token)
      # User can access
      sign_in user, store: false
    else
      authentication_error
    end
  end

  ##
  # Authentication Failure
  # Renders a 401 error
  def authentication_error
    # User's token is either invalid or not in the right format
    render json: {error: 'Ошибка аутентификации.'}, status: 401  # Authentication timeout
  end

end
