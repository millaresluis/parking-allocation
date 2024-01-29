class ParkingEntryPointController < ApplicationController

    def update
        @parking_entry_point = ParkingEntryPoint.where(id: params[:parking_entry_point][:id]).update(status: params[:parking_entry_point][:status])
    end
end