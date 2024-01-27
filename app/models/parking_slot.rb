class ParkingSlot < ApplicationRecord

    def self.get_parking_slots
        ParkingSlot.where(status: 'active').order("FIELD(parking_lot,1,2,4,3)")

        ParkingSlot.find_by_sql("SELECT 
            ps.*, pa.vehicle_id, pa.parking_type, pa.parking_entry_point
        FROM
            parking_slots ps
        LEFT JOIN
            parking_allocations pa ON pa.parking_slot_id = ps.id
        WHERE
            ps.status = 'active'
        ORDER BY FIELD(parking_lot, 1, 2, 4, 3), parking_slot_level ASC")
    end
end