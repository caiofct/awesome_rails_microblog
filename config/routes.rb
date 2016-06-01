Rails.application.routes.draw do
  resources :posts, only: [:index, :new, :create]
  devise_for :users, :controllers => { registrations: 'registrations' }
  root "home#index"
end
