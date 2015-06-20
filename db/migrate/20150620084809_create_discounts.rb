class CreateDiscounts < ActiveRecord::Migration
  def change
    create_table :discounts do |t|
      t.string :title
      t.text :description
      t.integer :discount
      t.string :link
      t.string :address
      t.string :type
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
