class ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing
  end

  def create
    @listing = Listing.create!(listing_params)
    render json: @listing
  end

  def update
    @listing = Listing.find(params[:id])
    @listing.update!(listing_params)
    render json: @listing
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render nothing:true
  end

  private
  def listing_params
    params.require(:listing).permit(:date, :time_start, :time_end, :address, :city, :state, :zipcode,
                                  :county, :list_price, :property_status, :property_type, :mls_num,
                                  :bedrooms_num, :full_baths, :half_baths, :sponsors, :property_description,
                                  :food_offered, :food_description, :incentive, :property_image)
  end

end
