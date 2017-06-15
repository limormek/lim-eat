class AddKosherToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :kosher, :boolean, null: false
  end
end
