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
        @allocation = ParkingAllocation.new(parking_allocation_params)
        @allocation.handle_parking(
            params[:parking_allocation][:vehicle_id],
            params[:parking_allocation][:vehicle_type],
            params[:parking_allocation][:parking_entry_point]
        )

        unless @allocation.errors.any?
            @allocation.save

            if params[:parking_receipt].present?
                # Generate receipt
                @receipt = ParkingReceipt.new(parking_receipt_params)
                @receipt.handle_parking_receipt(
                    params[:parking_receipt][:datetime_in],
                    params[:parking_receipt][:datetime_out],
                    params[:parking_receipt][:parking_slot_type],
                    params[:parking_allocation][:parking_slot_id],
                    params[:parking_allocation][:vehicle_id]
                )

                @receipt.save

                redirect_to get_parking_receipt_path(vehicle_id: params[:parking_allocation][:vehicle_id], parking_slot_id: params[:parking_allocation][:parking_slot_id])
            end
        end
    end

    def update
        vehicle = Vehicle.set_vehicle(params[:parking_allocation][:vehicle_id])
        vehicle.update(vehicle_status: params[:parking_allocation][:vehicle_status])
    end

    private

    def parking_allocation_params
        params.require(:parking_allocation).permit(:id, :vehicle_id, :parking_slot_id, :parking_type, :datetime, :parking_entry_point, :status)
    end

    def parking_receipt_params
        params.require(:parking_receipt).permit(:id, :vehicle_id, :parking_slot_id, :datetime_in, :datetime_out, :status)
    end

end