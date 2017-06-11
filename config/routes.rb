Rails.application.routes.draw do
  resources :restaurants, only: [:index, :create, :show]

  post '/create', to: 'restaurants#create'

  get '(*path)', to: 'restaurants#index'

end
