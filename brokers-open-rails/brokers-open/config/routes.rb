Rails.application.routes.draw do

get "/listings"     => "listings#index"
get "/listings/:id" => "listings#show"

  resources :users do
    resources :listings
  end
end
