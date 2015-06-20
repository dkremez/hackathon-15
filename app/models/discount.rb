class Discount < ActiveRecord::Base
  has_many :addresses
  has_one :category

  validates :title, :description, :discount, presence: true
end
