Rails.application.routes.draw do
  get 'angular/index'
  root 'angular#index'

  namespace V1 do
    resources :products, except: [:show, :edit, :update]
    resources :categories
  end
end
