class ParkingReceiptController < ApplicationController

    def get_parking_receipt
        @title = "Receipt"
        vehicle_id = params[:vehicle_id]
        parking_slot_id = params[:parking_slot_id]
        @parking_receipt = ParkingReceipt.get_parking_receipt(vehicle_id, parking_slot_id)
    end
end