Rails.application.routes.draw do
  get 'angular/index'
  root 'angular#index'

  namespace :v1 do
    resources :products, except: [:show, :edit, :update]
    resources :categories
  end
end
