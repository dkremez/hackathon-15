class AddressSerializer < ActiveModel::Serializer
  attributes :id, :address, :latitude, :longitude, :discount_id, :foursquare_venue
end
