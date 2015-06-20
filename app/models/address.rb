class Address < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  belongs_to :discount

  validates :address, :discount_id, presence: true
end
