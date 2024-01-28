class ParkingSlot < ApplicationRecord

    def self.get_parking_slots
        ParkingSlot.where(status: 'active').order("FIELD(parking_lot,1,2,4,3)")

        ParkingSlot.find_by_sql("
            SELECT
                ps.*,
                pa.vehicle_id,
                pa.parking_type,
                pa.parking_entry_point,
                pa.datetime,
                v.plate_number_id,
                v.vehicle_type,
                (SELECT COUNT(pa.id) FROM parking_allocations pa WHERE pa.parking_slot_id = ps.id AND pa.status = 'active') as parking_count
            FROM
                parking_slots ps
            LEFT JOIN
                parking_allocations pa ON pa.parking_slot_id = ps.id AND pa.status = 'active'
            LEFT JOIN
                vehicles v ON v.id = pa.vehicle_id AND v.status = 'active'
            WHERE
                ps.status = 'active' AND (pa.parking_type = 0 OR pa.parking_type IS NULL)
            ORDER BY
                FIELD(parking_lot, 1, 2, 4, 3), ps.id ASC, parking_slot_level ASC
        ")
    end
end