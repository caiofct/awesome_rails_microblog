Rails.application.routes.draw do
  resources :posts, only: [:index, :new, :create]
  devise_for :users, :controllers => { registrations: 'registrations' }

  resources :users, only: [:update]
  get '/user/:username' => 'users#show', as: :user_profile, constraints: { username: /[^\/]+/ }

  root 'home#index'
end
