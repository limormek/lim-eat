# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#---

# encoding: utf-8
unless Rails.env.test?

  Restaurant.delete_all
  Restaurant.create!(name: 'Joya',
                     cuisine: 'Italian',
                     rating: 3,
                     tenbis: true,
                     address: 'Haarbaa 5, Tel Aviv Yaffo',
                     max_time: 25,
                     kosher: false)
# . . .
  Restaurant.create!(name: 'Salatim',
                     cuisine: 'Salads',
                     rating: 2,
                     tenbis: false,
                     address: 'Haarbaa 10, Tel Aviv Yaffo',
                     max_time: 20,
                     kosher: true)

# . . .

  Restaurant.create!(name: 'Olivery',
                     cuisine: 'Italian',
                     rating: 2,
                     tenbis: true,
                     address: 'Ibn Gabirol 135, Tel Aviv Yaffo',
                     max_time: 40,
                     kosher: false)


# . . .

  Restaurant.create!(name: 'Barie: Salat Israeli',
                     cuisine: 'Salads',
                     rating: 1,
                     tenbis: true,
                     address: 'Ibn Gabirol 30, Tel Aviv Yaffo',
                     max_time: 15,
                     kosher: true)

# . . .

  Restaurant.create!(name: 'Montifiore Cafe',
                     cuisine: 'Salads',
                     rating: 2,
                     tenbis: true,
                     address: 'Ibn Gabirol 95, Tel Aviv Yaffo',
                     max_time: 20,
                     kosher: false)

# . . .

  Restaurant.create!(name: 'Black Burgers',
                     cuisine: 'Hamburgers',
                     rating: 2,
                     tenbis: true,
                     address: 'Azrieli 132, Tel Aviv Yaffo',
                     max_time: 40,
                     kosher: true)

# . . .

  Restaurant.create!(name: 'TYO',
                     cuisine: 'Asian',
                     rating: 3,
                     tenbis: true,
                     address: 'Montifiore 7, Tel Aviv Yaffo',
                     max_time: 30,
                     kosher: false)

# . . .

  Restaurant.create!(name: 'Okinawa',
                     cuisine: 'Asian',
                     rating: 2,
                     tenbis: false,
                     address: 'Neve Tzedek',
                     max_time: 25,
                     kosher: true)

# . . .

  Restaurant.create!(name: 'Zorik',
                     cuisine: 'Cafe',
                     rating: 2,
                     tenbis: false,
                     address: 'Kikar Milano, Tel Aviv',
                     max_time: 30,
                     kosher: false)

end