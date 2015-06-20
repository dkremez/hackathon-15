class Discount < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  validates :title, :description, :discount, :address
end
