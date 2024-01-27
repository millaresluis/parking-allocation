class ParkingAllocation < ApplicationRecord
    validates :parking_entry_point, presence: true

    def self.find_available_parking_slot(vehicle_type, parking_entry_point)
        available_slots = ParkingSlot.where(parking_slot_status: 'available', parking_lot: parking_entry_point).where("parking_slot_level >= #{vehicle_type}").order(parking_slot_level: "ASC").first
    end
end