class AddressController < ApplicationController
  def show
    @address = Address.find params[:id]
    render json: @address
  end
end
