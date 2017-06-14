
class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :cuisine, :rating, :tenbis, :address, :max_time, :kosher, :lat, :lng
end