Rails.application.routes.draw do
  resources :users do
    resources :listings
  end
end
