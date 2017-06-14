class AddCoordinatesToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :lat, :decimal, precision: 9, scale: 6
    add_column :restaurants, :lng, :decimal, precision: 9, scale: 6
  end
end
