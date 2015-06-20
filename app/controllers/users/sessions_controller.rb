require 'smg_api'
class Users::SessionsController < Devise::SessionsController
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    username = params['user']['username']
    password = params['user']['password']
    user = User.find_by(username: username)
    unless user
      smg_api = SmgApi.new(username, password)
      if smg_api.user_valid?
        new_user = User.new(username: username)
        new_user.password = password
        new_user.save
      else
        throw :warden, message: 'SMG API: ' + smg_api.error
      end
    end
    super
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
