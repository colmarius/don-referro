Rails.application.routes.draw do
  namespace :api do
    resources :jobs, only: [:index, :update, :destroy]
  end
end
