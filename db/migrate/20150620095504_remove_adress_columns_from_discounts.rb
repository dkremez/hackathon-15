class RemoveAdressColumnsFromDiscounts < ActiveRecord::Migration
  def change
    remove_column :discounts, :address, :string
    remove_column :discounts, :latitude, :float
    remove_column :discounts, :longitude, :float
  end
end
