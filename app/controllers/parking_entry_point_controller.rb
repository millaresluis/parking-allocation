class ParkingEntryPointController < ApplicationController

    def create
        @parking_entry_point = ParkingEntryPoint.new()
        @parking_entry_point.save if !@parking_entry_point.errors.any?
    end

    def update
        @parking_entry_point = ParkingEntryPoint.last.update(status: 'inactive')
    end
end