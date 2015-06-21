class RatesController < ApplicationController
  def create
    @discount = Discount.find(params[:discount_id])
    @rate = Rate.new(user_id: current_user.id, rateable: @discount, rating: params[:rating])
    if @rate.save
      render json: @discount
    else
      render json: {errors: @rate.errors}, status: :unprocessable_entity
    end
  end
end
