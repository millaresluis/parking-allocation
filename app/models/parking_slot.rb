class ParkingSlot < ApplicationRecord

    def self.get_parking_slots
        ParkingSlot.find_by_sql("
            SELECT
                ps.*,
                pa.vehicle_id,
                pa.parking_type,
                pa.parking_entry_point,
                pa.datetime,
                v.plate_number_id,
                v.vehicle_type,
                v.vehicle_status,
                (SELECT COUNT(pa.id) FROM parking_allocations pa WHERE pa.parking_slot_id = ps.id AND pa.status = 'active') as parking_count
            FROM
                parking_slots ps
            LEFT JOIN
                parking_allocations pa ON pa.parking_slot_id = ps.id AND pa.status = 'active'
            LEFT JOIN
                vehicles v ON v.id = pa.vehicle_id AND v.status = 'active'
            WHERE
                ps.status = 'active' AND (pa.parking_type = 0 OR pa.parking_type IS NULL)
            ORDER BY ps.id ASC, parking_slot_level ASC
        ")
    end

    # Checks if parking has available slots
    def self.find_available_parking_slot(vehicle_type, parking_entry_point)
        entry_point = ParkingEntryPoint.entry_point_checker(parking_entry_point)
        entry_point ? id_sort = "asc" : id_sort = "desc" 
        vehicle_type == '2' ? level_sort = "FIELD(parking_slot_level, 2,3,1)" : level_sort = "parking_slot_level ASC"

        ParkingSlot
            .where(parking_slot_status: 'available')
            .where("parking_slot_level >= ?", vehicle_type)
            .order("#{level_sort}")
            .order(id: id_sort)
            .first

    end

    def self.set_parking_slot(parking_slot_id)
        self.find_by(id: parking_slot_id, status: 'active')
    end
end