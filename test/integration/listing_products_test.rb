require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  setup do
    Product.create!(name: "Zircon", description: "Cool", price: "110.50")
    Product.create!(name: "Mircon", description: "Cool!", price: "1110.50")
  end

  test 'listing products' do
    get '/products'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Product.count, json(response.body)[:products].size
  end

  test 'lists books by price products' do
    get '/products?price=110.50'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal 1, json(response.body)[:products].size
  end
end
