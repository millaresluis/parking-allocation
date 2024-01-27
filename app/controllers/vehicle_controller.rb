class VehicleController < ApplicationController

  def index
    @title = ""
  end

  def create
    @vehicle = Vehicle.new(vehicle_params)
    @vehicle.save if !@vehicle.errors.any?
  end

  private

  def vehicle_params
      params.require(:vehicle).permit(:id, :plate_number_id, :vehicle_type, :status)
  end
end