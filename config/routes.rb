Rails.application.routes.draw do
  default_url_options Rails.application.config.action_mailer.default_url_options

  resources :posts, only: [:index, :new, :create]
  devise_for :users, :controllers => { registrations: 'registrations' }

  resources :users, only: [:update] do
    collection do
      get "search"
    end
  end

  get '/user/:username' => 'users#show', as: :user_profile, constraints: { username: /[^\/]+/ }
  get "/user/:username/follow" => 'users#follow', as: :follow_user, constraints: { username: /[^\/]+/ }
  get "/user/:username/unfollow" => 'users#unfollow', as: :unfollow_user, constraints: { username: /[^\/]+/ }

  root 'home#index'
end
