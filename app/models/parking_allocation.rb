class ParkingAllocation < ApplicationRecord
    include ApplicationHelper

    validates :parking_entry_point, presence: true

    belongs_to :vehicle, foreign_key: 'vehicle_id'
    belongs_to :parking_slot, foreign_key: 'parking_slot_id'
    has_many :parking_receipts, foreign_key: 'parking_allocation_id'

    def handle_parking(vehicle_id, vehicle_type, parking_entry_point)
        available_slot, vehicle_checker, vehicle, parking_allocation = Vehicle.handle_assigned_vehicle(vehicle_id, vehicle_type, parking_entry_point)
        datetime = set_db_datetime_format(DateTime.now)

        assign_parking(available_slot, vehicle_checker, vehicle, parking_allocation, datetime)
    end

    def self.set_parking_allocation(vehicle_id)
        self.where(vehicle_id: vehicle_id, status: 'active')
    end

    private
    
    def assign_parking(available_slot, vehicle_checker, vehicle, parking_allocation, datetime)
        if vehicle_checker.blank?
            if available_slot.present?
                parking_slot = ParkingSlot.set_parking_slot(available_slot)
                self.parking_type = 0
                self.parking_slot_id = available_slot.id

                vehicle.update(vehicle_status: 'parked')
                parking_slot.update(parking_slot_status: 'occupied')
            else
                errors.add(:base, "No available parking slot.")
            end
        else
            parking_slot = ParkingSlot.set_parking_slot(parking_allocation.parking_slot_id)
            self.parking_type = 1
            self.status = 'inactive'
            parking_allocation.update(status: 'inactive')

            vehicle.update(vehicle_status: 'departed')
            parking_slot.update(parking_slot_status: 'available')
        end

        self.datetime = datetime
    end
      
end