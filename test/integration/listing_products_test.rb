require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  setup do
    Product.create!(name: "Zircon", description: "Cool", price: "110.50")
  end

  test 'listing products' do
    get '/products'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Product.count, JSON.parse(response.body).size
  end
end
