# == Schema Information
#
# Table name: restaurants
#
#  id         :integer          not null, primary key
#  name       :string
#  cuisine    :string
#  rating     :integer
#  tenbis     :boolean
#  address    :string
#  max_time   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  kosher     :boolean
#

FactoryGirl.define do

  factory :restaurant, class: Restaurant do
    name { Faker::Name.last_name }
    cuisine { Faker::Name.name }
    rating { Faker::Number.rand_in_range(1, 3) }
    tenbis { Faker::Boolean.boolean }
    kosher { Faker::Boolean.boolean }
    address { Faker::Address.full_address }
    max_time { Faker::Number.rand_in_range(15, 120) }

    trait :kosher do
      kosher true
    end

    trait :good do
      rating 3
    end

    trait :accepts do
      tenbis true
    end

    trait :italian do
      cuisine 'Italian'
    end

    trait :quick do
      max_time 15
    end
  end


end
