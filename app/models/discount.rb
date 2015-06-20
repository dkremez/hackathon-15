class Discount < ActiveRecord::Base
  has_many :addresses


  validates :title, :description, :discount, presence: true
end
