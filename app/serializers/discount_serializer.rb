class DiscountSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :discount, :link, :address, :type, :latitude, :longitude
end
