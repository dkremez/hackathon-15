class ChangeDiscountTypeInDiscounts < ActiveRecord::Migration
  def change
    change_column :discounts, :discount, :string
  end
end