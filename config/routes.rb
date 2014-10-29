Rails.application.routes.draw do
  get 'angular/show'
  root 'angular#show'

  resources :products
  resources :categories
end
