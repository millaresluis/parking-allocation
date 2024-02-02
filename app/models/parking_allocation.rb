class ParkingAllocation < ApplicationRecord
    validates :parking_entry_point, presence: true

    def self.find_available_parking_slot(vehicle_type, parking_entry_point)
        entry_point = ParkingAllocation.entry_point_checker(parking_entry_point)
        entry_point ? id_sort = "asc" : id_sort = "desc" 

        vehicle_type == '2' ? level_sort = "FIELD(parking_slot_level, 2,3,1)" : level_sort = "parking_slot_level ASC"

        ParkingSlot
            .where(parking_slot_status: 'available')
            .where("parking_slot_level >= ?", vehicle_type)
            .order("#{level_sort}")
            .order(id: id_sort)
            .first

    end

    def self.entry_point_checker(entry_point)
        parking_entry_points = ParkingEntryPoint.where(status: 'active')
        first_half = parking_entry_points.take((parking_entry_points.length + 1) / 2)
        return first_half.pluck(:id).map(&:to_s).include?(entry_point.to_s)
    end        
      
end