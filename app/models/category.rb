class Category < ActiveRecord::Base
  has_many :discounts

  validates :name, presence: true
  mount_uploader :image, ImageUploader
end
