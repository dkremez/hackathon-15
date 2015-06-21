class User < ActiveRecord::Base
  devise :database_authenticatable, :rememberable, :trackable

  has_many :rates

  validates :username, :presence => true, :uniqueness => { :case_sensitive => false }

  after_create :update_access_token!

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if username = conditions.delete(:username)
      where(conditions.to_h).where(["lower(username) = :value", { :value => username.downcase }]).first
    else
      where(conditions.to_h).first
    end
  end

  private

  def update_access_token!
    self.access_token = "#{self.id}:#{Devise.friendly_token}"
    save
  end
end
