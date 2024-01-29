Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Parking Allocation
  get 'parking-allocation', to: 'parking_allocation#index', as: :parking_allocation
  post 'parking-allocation/create', to: 'parking_allocation#create', as: :create_parking_allocation
  match 'parking-allocation/update',  to: 'parking_allocation#update', via: [:patch, :post], as: :update_parking_allocation

  # Parking Entry Point
  match 'parking-entry-point/update',  to: 'parking_entry_point#update', via: [:patch, :post], as: :update_entry_point

  # Vehicle
  post 'vehicle/create', to: 'vehicle#create', as: :create_vehicle

  # Parking Receipt
  # post 'parking-receipt/create', to: 'parking_receipt#create', as: :create_parking_receipt
end
