class Category < ActiveRecord::Base
  has_many :discounts

  validates :name, presence: true
end
