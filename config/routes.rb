Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'parking-allocation', to: 'parking_allocation#index', as: :parking_allocation
  post 'vehicle/create', to: 'vehicle#create', as: :create_vehicle
  post 'parking-allocation/create', to: 'parking_allocation#create', as: :create_parking_allocation

  post 'parking-receipt/create', to: 'parking_receipt#create', as: :create_parking_receipt
end
