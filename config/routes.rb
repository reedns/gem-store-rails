Rails.application.routes.draw do
  devise_for :users
  get 'angular/index'
  root 'angular#index'

  namespace :v1 do
    resources :products, except: [:show, :edit]
    resources :categories
  end
end
