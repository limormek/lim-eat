class AddKosherToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :Restaurants, :kosher, :boolean
  end
end
