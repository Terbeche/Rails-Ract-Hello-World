Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :messages, only: [:index]
    end
  end
  
  root 'root#index'

end
