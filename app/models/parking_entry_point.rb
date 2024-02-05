class ParkingEntryPoint < ApplicationRecord
    
    # Check if the vehicle will proceed to left or right, depends on the selected entry point
    def self.entry_point_checker(entry_point)
        parking_entry_points = self.where(status: 'active')
        first_half = parking_entry_points.take((parking_entry_points.length + 1) / 2)
        return first_half.pluck(:id).map(&:to_s).include?(entry_point.to_s)
    end 

end