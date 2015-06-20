class SessionSerializer < ActiveModel::Serializer

  attributes :username, :user_id, :access_token

  def user_id
    object.id
  end

end