class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.integer :rating
      t.boolean :tenbis
      t.string :address
      t.integer :max_time

      t.timestamps
    end
  end
end
