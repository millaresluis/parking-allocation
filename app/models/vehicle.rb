class Vehicle < ApplicationRecord
    validates :plate_number_id, presence: true, uniqueness: { scope: :plate_number_id, message: "already exists." }
    validates :vehicle_type, presence: true

    def self.get_exiting_vehicles
        exiting_vehicles = Vehicle.find_by_sql("
            SELECT 
                v.*, pa.parking_slot_id, pa.parking_entry_point, ps.parking_slot_level, (SELECT parking_allocations.datetime FROM parking_allocations WHERE parking_allocations.vehicle_id = v.id AND parking_allocations.parking_type = 0 ) as datetime_in, pa.datetime as datetime_out
            FROM
                vehicles v
            LEFT JOIN
                parking_allocations pa ON pa.vehicle_id = v.id
            LEFT JOIN
                parking_slots ps ON ps.id = pa.parking_slot_id
            WHERE
                v.vehicle_status = 'exiting' AND v.status = 'active' AND pa.status = 'active'
        ")
    end

    def self.handle_assigned_vehicle(vehicle_id, vehicle_type, parking_entry_point)
        available_slot = ParkingSlot.find_available_parking_slot(vehicle_type, parking_entry_point)
        vehicle_checker = ParkingAllocation.where(vehicle_id: vehicle_id, status: 'active').first
        vehicle = self.set_vehicle(vehicle_id)
        parking_allocation = ParkingAllocation.set_parking_allocation(vehicle_id).first

        return available_slot, vehicle_checker, vehicle, parking_allocation
    end

    def self.set_vehicle(vehicle_id)
        self.find_by(id: vehicle_id, status: 'active')
    end
end