Rails.application.routes.draw do
  # resources :restaurants
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '(*path)', to: 'restaurants#index'

end
