require 'test_helper'

class ListingCategoriesTest < ActionDispatch::IntegrationTest
  setup do
    Category.create!(name: 'Shiny')
  end

  test 'lists categories' do
    get '/categories', {}, { 'Accept' => 'application/json' }
    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal 1, json(response.body).size
  end
end
