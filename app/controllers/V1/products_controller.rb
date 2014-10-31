module V1
  class ProductsController < ApplicationController
    def index
      products = Product.all

      render json: products, status: 200, root: false
    end

    def create
      product = Product.new(product_params)
      if product.save
        render json: product, status: 201, location: product
      else
        render json: product.errors, status: 422
      end
    end

    def update
      product = Product.find(params[:id])
      if product.update(product_params)
        render json: product
      else
        render json: product.errors, status: 422
      end
    end

    def destroy
      product = Product.find(params[:id])
      product.destroy
      render nothing: true, status: 204
    end

    private

    def product_params
      params.require(:product).permit(:name, :description, :price, :category_id,
                                      :faces, :shine, :color, :rarity)
    end
  end
end
