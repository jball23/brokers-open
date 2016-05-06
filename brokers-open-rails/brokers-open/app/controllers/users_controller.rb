class UsersController < ApplicationController

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
    params.require(:entry).permit(:first_name, :last_name, :email, :phone, :agency, :avatar)

end
