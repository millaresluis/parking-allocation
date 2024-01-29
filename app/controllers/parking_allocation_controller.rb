class ParkingAllocationController < ApplicationController

    include ApplicationHelper
    def index
        @title = "Parking Allocation"
        @parking_slots = ParkingSlot.get_parking_slots()
        @parking_entry_points = ParkingEntryPoint.where(status: 'active')
        @total_vehicles = Vehicle.where(status: 'active')
        @assigned_vehicles = Vehicle.where(vehicle_status: 'assigned', status: 'active')
        @parked_vehicles = Vehicle.where(vehicle_status: 'parked', status: 'active')
        @exiting_vehicles = Vehicle.get_exiting_vehicles()
        @vehicle_type = [["Select a Vehicle Type", ""], ["SP", "1"], ["MP", "2"], ["LP", "3"]]
    end

    def create
        @parking_allocation = ParkingAllocation.new(parking_allocation_params)

        # Find available parking slot or if the vehicle is parked already
        vehicle_id = params[:parking_allocation][:vehicle_id]
        vehicle_type = params[:parking_allocation][:vehicle_type]
        parking_entry_point = params[:parking_allocation][:parking_entry_point]

        parking_slot_id = ParkingAllocation.find_available_parking_slot(vehicle_type, parking_entry_point, set_parking_lot_order(parking_entry_point.to_i))
        parked_vehicle_checker = ParkingAllocation.where(vehicle_id: vehicle_id, status: 'active').first

        # Update the status of vehicle and parking slot
        vehicle = Vehicle.where(id: vehicle_id, status: 'active')
        parking_slot = ParkingSlot.where(id: parking_slot_id, status: 'active')
        @parking_allocation.datetime = DateTime.now.strftime("%Y-%m-%d %H:%M:%S") # Set the clock in/out of the vehicle in the parking complex

        if parked_vehicle_checker.blank? 
            if parking_slot_id.present?
                @parking_allocation.parking_type = 0
                @parking_allocation.parking_slot_id = parking_slot_id.id
                vehicle.update(vehicle_status: 'parked')
                parking_slot.update(parking_slot_status: 'occupied')
            else
                @parking_allocation.errors.add(:base, "No available parking slot.")
            end
        else
            @parking_allocation.parking_type = 1
            vehicle.update(vehicle_status: 'exiting')
        end

        # Save the instance
        @parking_allocation.save if !@parking_allocation.errors.any?

    end

    def update
        @vehicle = Vehicle.where(id: params[:parking_allocation][:vehicle_id], status: 'active').update(vehicle_status: 'parked')
        @parking_allocation = ParkingAllocation.where(vehicle_id: params[:parking_allocation][:vehicle_id], parking_slot_id: params[:parking_allocation][:parking_slot_id], parking_type: "1", status: 'active').update(status: "inactive")
    end

    def update_entry_point
        @parking_entry_point = ParkingEntryPoint.where(id: params[:parking_entry_point][:id], status: "active").update(status: params[:parking_entry_point][:vehicle_status])
    end

    private

    def parking_allocation_params
        params.require(:parking_allocation).permit(:id, :vehicle_id, :parking_slot_id, :parking_type, :datetime, :parking_entry_point, :status)
    end

end