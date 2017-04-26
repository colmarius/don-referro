Rails.application.routes.draw do
  namespace :api do
    resources :jobs, only: [:index, :create, :show, :update, :destroy]
  end
end
