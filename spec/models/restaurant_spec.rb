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

require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'validate fields' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:cuisine) }
    it { should validate_numericality_of(:rating)}
    it { should validate_presence_of(:rating) }
    it { should validate_presence_of(:address) }
    it { should validate_presence_of(:max_time) }
    it { should validate_presence_of(:kosher) }

    # it { should is_less_than_or_equal_to :rating, less_than_or_equal_to: 3 }
  end

  describe :create do
    let!(:restaurant) {  create(:restaurant) }

    it 'should have one restaurant' do
      expect(Restaurant.count).to eq(1)
    end

  end


end
