class AddFoursquareVenueToAddresses < ActiveRecord::Migration
  def change
    add_column :addresses, :foursquare_venue, :string
  end
end
