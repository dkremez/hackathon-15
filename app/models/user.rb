class User < ActiveRecord::Base
  devise :database_authenticatable, :rememberable, :trackable

  validates :username, :presence => true, :uniqueness => { :case_sensitive => false }

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if username = conditions.delete(:username)
      where(conditions.to_h).where(["lower(username) = :value", { :value => username.downcase }]).first
    else
      where(conditions.to_h).first
    end
  end
end
