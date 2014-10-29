class ProductsController < ApplicationController
  def index
    products = Product.all

    if price = params[:price]
      products = products.where(price: price)
    end
    render json: products, status: 200
  end
end
