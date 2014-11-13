require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GemStoreRails
  class Application < Rails::Application
    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.test_framework false
      g.helper false
    end

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end
  end
end
