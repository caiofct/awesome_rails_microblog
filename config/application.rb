require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsMicroblog
  class Application < Rails::Application
    config.encoding = 'utf-8'
    config.time_zone = 'America/Fortaleza'
    config.i18n.default_locale = :'pt-BR'
    config.i18n.available_locales = %w(pt-BR en)
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    config.assets.precompile += %w( .svg .otf .eot .woff .ttf)
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react stage-0 ] --plugins [ syntax-async-functions transform-regenerator ] ]"
  end
end
