Rails.application.routes.draw do
  resources :restaurants, only: [:index, :create, :show]

  post '/create', to: 'restaurants#create'

  # Make every request to go to restaurants#index
  get '(*path)', to: 'restaurants#index'

end
