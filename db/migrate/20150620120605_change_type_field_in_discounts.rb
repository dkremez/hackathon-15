class ChangeTypeFieldInDiscounts < ActiveRecord::Migration
  def change
    remove_column :discounts, :type
    add_reference :discounts, :category, index: true, foreign_key: true
  end
end
