class ListingsController < ApplicationController

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def listing_params
    params.require(:entry).permit(:date, :time_start, :time_end, :address, :city, :state, :zipcode,
                                  :county, :list_price, :property_status, :property_type, :mls_num,
                                  :bedrooms_num, :full_baths, :half_baths, :sponsors, :property_description,
                                  :food_offered, :food_description, :incentive, :property_image)
  end

end
