class ParkingReceiptController < ApplicationController

    def create
        @parking_receipt = ParkingReceipt.new(parking_receipt_params)
        if !@parking_receipt.errors.any?
            if @parking_receipt.save
                @vehicle = Vehicle.where(id: params[:parking_receipt][:vehicle_id], status: 'active').update(vehicle_status: 'departed')
                @parking_slot = ParkingSlot.where(id: params[:parking_receipt][:parking_slot_id], status: 'active').update(parking_slot_status: 'available')
                @parking_allocations = ParkingAllocation.where(vehicle_id: params[:parking_receipt][:vehicle_id], status: 'active').update_all(status: 'inactive')
            end
        end
    end

    private

    def parking_receipt_params
        params.require(:parking_receipt).permit(:id, :vehicle_id, :parking_slot_id, :datetime_in, :datetime_out, :total_hrs, :total_charge, :status)
    end
end