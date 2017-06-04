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
#

class Restaurant < ApplicationRecord
  validates :name, :cuisine, :rating, :address, :max_time, :kosher, presence: true
  validates :rating, numericality: true
  validates :rating, inclusion: 1..3
end
