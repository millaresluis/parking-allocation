class ParkingAllocationController < ApplicationController


    def index
        @title = "Parking Allocation"
        @parking_slots = ParkingSlot.get_parking_slots()
        @parking_entry_points = ParkingEntryPoint.where(status: 'active')
        @assigned_vehicles = Vehicle.where(vehicle_status: 'assigned', status: 'active')
        @vehicle_type = [["Select a Vehicle Type", ""], ["SP", "1"], ["MP", "2"], ["LP", "3"]]
    end

    def create
        
        vehicle_id = params[:parking_allocation][:vehicle_id]
        vehicle_type = params[:parking_allocation][:vehicle_type]
        parking_entry_point = params[:parking_allocation][:parking_entry_point]

        parking_slot_id = ParkingAllocation.find_available_parking_slot(vehicle_type, parking_entry_point) # Find available parking slot
        parked_vehicle_checker = ParkingAllocation.where(vehicle_id: vehicle_id, status: 'active').first

        if parking_slot_id.present?
            
            params[:parking_allocation][:parking_slot_id] = parking_slot_id.id
            params[:parking_allocation][:parking_datetime] = DateTime.now
            
            # Set the status of vehicle and parking slot
            vehicle = Vehicle.where(id: vehicle_id, status: 'active')
            parking_slot = ParkingSlot.where(id: parking_slot_id, status: 'active')
            
            if parked_vehicle_checker.blank? 
                params[:parking_allocation][:parking_type] = 0
                vehicle.update(vehicle_status: 'parked')
                parking_slot.update(parking_slot_status: 'occupied')
            else
                params[:parking_allocation][:parking_type] = 1
                vehicle.update(vehicle_status: 'left')
                parking_slot.update(parking_slot_status: 'available')
            end
            
            @parking_allocation = ParkingAllocation.new(parking_allocation_params)
            @parking_allocation.save if !@parking_allocation.errors.any?

        end

    end

    private

    def parking_allocation_params
        params.require(:parking_allocation).permit(:id, :vehicle_id, :parking_slot_id, :parking_type, :parking_datetime, :parking_entry_point, :status)
    end
end