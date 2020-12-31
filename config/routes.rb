Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :boards, only: [:create, :destroy, :show, :update, :index]
    resources :pins, only: [:create, :destroy, :show, :update, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :board_pins, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end

  root "static_pages#root"
end
