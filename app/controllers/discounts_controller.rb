class DiscountsController < ApplicationController

  def index
    @discounts = Discount.all
    render json: @discounts
  end

  def show

  end
end
