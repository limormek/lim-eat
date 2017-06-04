# == Schema Information
#
# Table name: Restaurants
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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
