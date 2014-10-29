require 'test_helper'

class CreatingProductsTest < ActionDispatch::IntegrationTest
  test 'creates new products valid data' do
    post '/products', { product: {
      name: 'Blerpcon',
      description: 'Neat!',
      price: 1000,
      }}.to_json,
      {'Accept' => 'application/json',
       'Content-type' => 'application/json'}

    assert_equal 201, response.status
    assert_equal Mime::JSON, response.content_type
    product = json(response.body)[:product]
    assert_equal product_url(product[:id]), response.location
    assert_equal 'Blerpcon', product[:name]
    assert_equal 'Neat!', product[:description]
    assert_equal 1000, product[:price]
  end

  test 'does not create products with invalid data' do
    post '/products', { product: {
      description: 'Neat!',
      price: 1000,
      }}.to_json,
      {'Accept' => 'application/json',
       'Content-type' => 'application/json'}

    assert_equal 422, response.status

  end
end
