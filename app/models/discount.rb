class Discount < ActiveRecord::Base
  has_many :addresses
  belongs_to :category
  has_many :rates, as: :rateable

  validates :title, :description, :discount, presence: true
  mount_uploader :image, ImageUploader

  def rating
    rates.average(:rating).to_f.round(1) || 0
  end
end
