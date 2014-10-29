Rails.application.routes.draw do
  get 'angular/show'
  root 'angular#show'

  namespace V1 do
    resources :products, except: [:show, :edit, :update]
    resources :categories
  end
end
