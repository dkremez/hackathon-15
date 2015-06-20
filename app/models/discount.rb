class Discount < ActiveRecord::Base
  has_many :addresses
  belongs_to :category

  validates :title, :description, :discount, presence: true
  mount_uploader :image, ImageUploader
end
