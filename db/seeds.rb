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
                     kosher: false,
                     lat: 32.070650,
                     lng: 34.783434)
# . . .
  Restaurant.create!(name: 'Salatim',
                     cuisine: 'Salads',
                     rating: 2,
                     tenbis: false,
                     address: 'Haarbaa 10, Tel Aviv Yaffo',
                     max_time: 20,
                     kosher: true,
                     lat: 32.070606,
                     lng: 34.783832)

# . . .

  Restaurant.create!(name: 'Olivery',
                     cuisine: 'Italian',
                     rating: 2,
                     tenbis: true,
                     address: 'Ibn Gabirol 135, Tel Aviv Yaffo',
                     max_time: 40,
                     kosher: false,
                     lat:32.089283,
                     lng:34.782356)

# . . .

  Restaurant.create!(name: 'Sicilianit',
                     cuisine: 'Ice Cream',
                     rating: 3,
                     tenbis: false,
                     address: 'Ibn Gabirol 94, Tel Aviv Yaffo',
                     max_time: 10,
                     kosher: true,
                     lat:32.082811,
                     lng:34.781699)

# . . .

  Restaurant.create!(name: 'Juno',
                     cuisine: 'Cafe',
                     rating: 3,
                     tenbis: false,
                     address: 'Kikar Milano, Tel Aviv',
                     max_time: 60,
                     kosher: false,
                     lat: 32.093764,
                     lng: 34.785108)

# . . .

  Restaurant.create!(name: 'Barie: Salat Israeli',
                     cuisine: 'Salads',
                     rating: 1,
                     tenbis: true,
                     address: 'London Minister, Tel Aviv Yaffo',
                     max_time: 15,
                     kosher: true,
                     lat:32.075671,
                     lng: 34.784223)

# . . .

  Restaurant.create!(name: 'Joseph and Sons',
                     cuisine: 'Fish and Chips',
                     rating: 3,
                     tenbis: true,
                     address: 'Rabin Square, Tel Aviv',
                     max_time: 15,
                     kosher: false,
                     lat:32.079392,
                     lng: 34.781247)

# . . .

  Restaurant.create!(name: 'Segev Concept',
                     cuisine: 'Meat',
                     rating: 2,
                     tenbis: true,
                     address: 'Sarona, Tel Aviv',
                     max_time: 20,
                     kosher: false,
                     lat:32.071481,
                     lng: 34.787011)

# . . .

  Restaurant.create!(name: 'TYO',
                     cuisine: 'Asian',
                     rating: 3,
                     tenbis: true,
                     address: 'Montifiore 7, Tel Aviv Yaffo',
                     max_time: 30,
                     kosher: false,
                     lat:32.065238,
                     lng: 34.769722)

# . . .

  Restaurant.create!(name: 'Okinawa',
                     cuisine: 'Asian',
                     rating: 2,
                     tenbis: false,
                     address: 'Neve Tzedek',
                     max_time: 25,
                     kosher: true,
                     lat: 32.065728,
                     lng: 34.766934)

# . . .

  Restaurant.create!(name: 'Zorik',
                     cuisine: 'Cafe',
                     rating: 2,
                     tenbis: false,
                     address: 'Kikar Milano, Tel Aviv',
                     max_time: 30,
                     kosher: false,
                     lat: 32.094098,
                     lng: 34.785171)


# . . .

  Restaurant.create!(name: 'The Magician',
                     cuisine: 'Meat',
                     rating: 2,
                     tenbis: true,
                     address: 'Shlomo Hamelech 1, Tel Aviv',
                     max_time: 15,
                     kosher: true,
                     lat: 32.076667,
                     lng: 34.776614)

end