class RestaurantsController < ApplicationController
  include DefaultSerializerConcern
  skip_before_action :verify_authenticity_token, only: [:create]

  # self.default_serializer = RestaurantSerializer


  layout "restaurants"
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

  # GET /Restaurants
  # GET /Restaurants.json
  def index
    @restaurants_props = { restaurants: Restaurant.all }
  end

  # GET /Restaurants/1
  # GET /Restaurants/1.json
  def show
  end

  # GET /Restaurants/new
  def new
    @restaurant = Restaurant.new
  end

  # GET /Restaurants/1/edit
  def edit
  end

  # POST /Restaurants
  # POST /Restaurants.json
  def create
    @restaurant = Restaurant.new(restaurant_params)

    respond_to do |format|
      if @restaurant.save
        # format.html { redirect_to @restaurant, notice: 'Restaurant was successfully created.' }
        format.json { render status: :created, json: @restaurant, serializer: RestaurantSerializer }
      else
        format.html { render :new }
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /Restaurants/1
  # PATCH/PUT /Restaurants/1.json
  def update
    respond_to do |format|
      if @restaurant.update(restaurant_params)
        format.html { redirect_to @restaurant, notice: 'Restaurant was successfully updated.' }
        format.json { render :show, status: :ok, location: @restaurant }
      else
        format.html { render :edit }
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /Restaurants/1
  # DELETE /Restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.html { redirect_to restaurants_url, notice: 'Restaurant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :cuisine, :rating, :tenbis, :address, :max_time, :kosher, :lat, :lng)
    end
end
