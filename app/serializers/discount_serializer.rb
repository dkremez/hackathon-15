class DiscountSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :discount, :link, :image, :rating, :just_created

  has_many :addresses
  has_one :category

  def just_created
    object.created_at >= 2.hours.ago
  end
end
