require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  setup do
    @sparkly = Category.create!(name: 'Sparkly!')
    Product.create!(name: 'Zircon',
                    description: 'Cool',
                    price: '110.50',
                    category_id:
                    @sparkly.id)

    Product.create!(name: 'Mircon',
                    description: 'Cool!',
                    price: '1110.50',
                    category_id: @sparkly.id)
  end

  test 'listing products' do
    get '/v1/products'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Product.count, json(response.body)[:products].size
    products = json(response.body)[:products]
    product = products.first
    assert_equal @sparkly.id, product[:category_id]
  end
end
