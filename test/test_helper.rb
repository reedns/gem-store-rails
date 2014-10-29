ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

module ActiveSupport
  class TestCase
    fixtures :all
  end
end

def json(body)
  JSON.parse(body, symbolize_names: true)
end
