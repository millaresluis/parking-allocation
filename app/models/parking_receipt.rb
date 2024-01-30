class ParkingReceipt < ApplicationRecord

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
end