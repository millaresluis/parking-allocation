class ParkingAllocation < ApplicationRecord
    validates :parking_entry_point, presence: true

    def self.find_available_parking_slot(vehicle_type, parking_entry_point, sort)
        available_slots = ParkingSlot.where(parking_slot_status: 'available').where("(parking_lot >= #{parking_entry_point} OR parking_lot <= #{parking_entry_point}) AND parking_slot_level = #{vehicle_type}").order("#{sort}").order(id: "ASC", parking_slot_level: "ASC").first
    end

end