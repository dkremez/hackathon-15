class AddImageToDiscounts < ActiveRecord::Migration
  def change
    add_column :discounts, :image, :string
  end
end
