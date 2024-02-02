class ParkingReceipt < ApplicationRecord
    include ApplicationHelper

    validates :total_charge, presence: true
    validates :total_hrs, presence: true
    validates :datetime_in, presence: true
    validates :datetime_out, presence: true

    def self.get_parking_receipt(vehicle_id, parking_slot_id)
        ParkingReceipt.find_by_sql("
            SELECT 
                pr.*, v.plate_number_id, v.vehicle_type, ps.parking_slot_level
            FROM
                parking_receipts pr
                    LEFT JOIN
                vehicles v ON v.id = pr.vehicle_id
                    LEFT JOIN
                parking_slots ps ON ps.id = pr.parking_slot_id
            WHERE pr.status = 'active' AND v.id = #{vehicle_id} AND pr.parking_slot_id = #{parking_slot_id}
        ")
    end

    # Handle receipt data
    def handle_parking_receipt(datetime_in, datetime_out, parking_slot_type, parking_slot_id, vehicle_id)
        datetime_in = datetime_in.to_time
        datetime_out = DateTime.parse(datetime_out).strftime("%Y-%m-%d %H:%M:%S").to_time
        parking_slot_level = parking_slot_type
        total_hrs = ((datetime_out - datetime_in).to_i / 3600.0).ceil
        
        self.total_hrs = total_hrs
        self.total_charge = set_receipt_total_charge(parking_slot_level.to_i, total_hrs.to_i)
    end
end