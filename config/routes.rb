Rails.application.routes.draw do
  get 'angular/show'
  root 'angular#show'

  resources :products, except: [:show, :edit, :update]
  resources :categories
end
