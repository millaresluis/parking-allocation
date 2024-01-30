class ParkingAllocationController < ApplicationController

    include ApplicationHelper
    
    def index
        @title = "Parking Allocation"
        @parking_slots = ParkingSlot.get_parking_slots()
        @parking_entry_points = ParkingEntryPoint.all
        @active_parking_entry_points = ParkingEntryPoint.where(status: 'active')
        @total_vehicles = Vehicle.where(status: 'active')
        @assigned_vehicles = Vehicle.where(vehicle_status: 'assigned', status: 'active')
        @parked_vehicles = Vehicle.where(vehicle_status: 'parked', status: 'active')
        @exiting_vehicles = Vehicle.get_exiting_vehicles()
        @vehicle_type = [["Select a Vehicle Type", ""], ["SP", "1"], ["MP", "2"], ["LP", "3"]]
    end

    def create
        @parking_allocation = ParkingAllocation.new(parking_allocation_params)

        # Find available parking slot
        vehicle_id = params[:parking_allocation][:vehicle_id]
        vehicle_type = params[:parking_allocation][:vehicle_type]
        parking_entry_point = params[:parking_allocation][:parking_entry_point]
        available_parking_slot_id = ParkingAllocation.find_available_parking_slot(vehicle_type, parking_entry_point, set_parking_lot_order(parking_entry_point.to_i)) if parking_entry_point.present?

        # Check if the vehicle is parked already
        parked_vehicle_checker = set_parking_allocation(vehicle_id).first

        # Update the status of vehicle and parking slot
        set_vehicle(vehicle_id)
        set_parking_allocation(vehicle_id)
        @parking_allocation.datetime = set_db_datetime_format(DateTime.now)

        if parked_vehicle_checker.blank? 
            if available_parking_slot_id.present?
                set_parking_slot(available_parking_slot_id)
                @parking_allocation.parking_type = 0
                @parking_allocation.parking_slot_id = available_parking_slot_id.id
                @vehicle.update(vehicle_status: 'parked')
                @parking_slot.update(parking_slot_status: 'occupied')
            else
                @parking_allocation.errors.add(:base, "No available parking slot.") # Return if parking lots are occupied
            end
        else
            set_parking_slot(params[:parking_allocation][:parking_slot_id])
            @parking_allocation.parking_type = 1
            @parking_allocation.status = 'inactive'
            @vehicle.update(vehicle_status: 'departed')
            @parking_slot.update(parking_slot_status: 'available')
            @parking_allocations.update(status: 'inactive')

            # Handle receipt data
            datetime_in = params[:parking_receipt][:datetime_in]
            datetime_out = params[:parking_receipt][:datetime_out]
            parking_slot_type = params[:parking_receipt][:parking_slot_type]
            create_parking_receipt(datetime_in, datetime_out, parking_slot_type)
            
            redirect_to get_parking_receipt_path(vehicle_id: vehicle_id, parking_slot_id: params[:parking_allocation][:parking_slot_id])
        end

        # Save parking allocation
        @parking_allocation.save if !@parking_allocation.errors.any?
    end

    def update
        set_vehicle(params[:parking_allocation][:vehicle_id])
        @vehicle.update(vehicle_status: params[:parking_allocation][:vehicle_status])
    end

    def create_parking_receipt(datetime_in, datetime_out, parking_slot_type)
        @parking_receipt = ParkingReceipt.new(parking_receipt_params)
        datetime_in = datetime_in.to_time
        datetime_out = set_db_datetime_format(DateTime.parse(datetime_out)).to_time
        parking_slot_level = parking_slot_type
        total_hrs = ((datetime_out - datetime_in).to_i / 3600.0).ceil
        
        # Create parking receipt
        @parking_receipt.total_hrs = total_hrs
        @parking_receipt.total_charge = set_receipt_total_charge(parking_slot_level.to_i, total_hrs.to_i)
        @parking_receipt.save if !@parking_receipt.errors.any?
    end

    private

    def parking_allocation_params
        params.require(:parking_allocation).permit(:id, :vehicle_id, :parking_slot_id, :parking_type, :datetime, :parking_entry_point, :status)
    end

    def parking_receipt_params
        params.require(:parking_receipt).permit(:id, :vehicle_id, :parking_slot_id, :datetime_in, :datetime_out, :status)
    end

    def set_vehicle(vehicle_id)
        @vehicle = Vehicle.where(id: vehicle_id, status: 'active')
    end

    def set_parking_slot(parking_slot_id)
        @parking_slot = ParkingSlot.where(id: parking_slot_id, status: 'active')
    end

    def set_parking_allocation(vehicle_id)
        @parking_allocations = ParkingAllocation.where(vehicle_id: vehicle_id, status: 'active')
    end

end