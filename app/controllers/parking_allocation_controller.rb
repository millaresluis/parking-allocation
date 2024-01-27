class ParkingAllocationController < ApplicationController


    def index
        @title = "Parking Allocation"
        @parking_slots = ParkingSlot.where(status: 'active')
        @parking_entrances = ParkingEntrance.where(status: 'active')
        @vehicle_type = [["Select a Vehicle Type", ""], ["SP", "1"], ["MP", "2"], ["LP", "3"]]
        @unassigned_vehicles = Vehicle.where(vehicle_status: 'unassigned', status: 'active')
    end

    def create

    end

    def assign_parking_slot
        vehicle_size = params[:vehicle_size]
        entrance_id = params[:entrance_id]
    
        parking_slot = find_available_parking_slot(vehicle_size, entrance_id)
    
        if parking_slot
          # Assign the parking slot to the vehicle
          update_parking_slot_status(parking_slot, vehicle_size)
          render json: { message: 'Parking slot assigned successfully', slot: parking_slot }
        else
          render json: { message: 'No available parking slot' }, status: :unprocessable_entity
        end
    end

    private

    def parking_allocation_params
        # params.require(:vehicle).permit(:id, :plate_number_id, :vehicle_type, :status)
    end

    def find_available_parking_slot(vehicle_size, entrance_id)
        available_slots = ParkingSlot
                            .where(status: 'Available', entrance_id: entrance_id)
                            .where("size IN (?)", parking_sizes_for_vehicle(vehicle_size))
                            .order("FIELD(size, #`{parking_sizes_for_vehicle(vehicle_size).join(',')`})")

        available_slots.first
    end

    def update_parking_slot_status(parking_slot, vehicle_size)
        parking_slot.update(status: 'Occupied')
        # Additional logic if needed, e.g., updating the vehicle information in the parking slot
    end

    def parking_sizes_for_vehicle(vehicle_size)
        case vehicle_size
        when 'S'
            ['SP', 'MP', 'LP']
        when 'M'
            ['MP', 'LP']
        when 'L'
            ['LP']
        else
            []
        end
    end
end