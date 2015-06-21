class Rate < ActiveRecord::Base
  belongs_to :user
  belongs_to :rateable, polymorphic: true

  validates_inclusion_of :rating, :in => 0..10
  validates_uniqueness_of :user_id, :scope => [:rateable_id, :rateable_type], message: 'Вы можете оставить только один рейтинг на скидку.'
end
