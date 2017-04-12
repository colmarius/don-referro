Rails.application.routes.draw do
  namespace :api do
    resources :jobs, only: [:index, :create, :update, :destroy]
  end
end
