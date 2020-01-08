Rails.application.routes.draw do
  resources :carts
  resources :articles
  get '/articles_with_query/:query', to: 'articles#articles_with_params'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
