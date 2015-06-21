class DiscountSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :discount, :link, :image

  has_many :addresses
  has_one :category
end
