Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update]
    resources :boards, only: [:create, :destroy, :show, :update, :index]
    resource :session, only: [:create, :destroy, :show]
  end
  resources :users
  root "static_pages#root"
end
