module ApplicationHelper
    def set_parking_slot_type(parking_slot_level)
        case parking_slot_level
        when 1
            "SP"
        when 2
            "SP-MP"
        else
            "SP-MP-LP"
        end
    end

    def set_vehicle_type(vehicle_type_level)
        case vehicle_type_level
        when 1
            "S"
        when 2
            "M"
        else
            "L"
        end
    end

    def set_parking_lot_order(entry_point)
        case entry_point
        when 1
            "FIELD(parking_lot, 1, 2, 3, 4)"
        when 2
            "FIELD(parking_lot, 2, 3, 4, 1)"
        when 3
            "FIELD(parking_lot, 3, 4, 2, 1)"
        else
            "FIELD(parking_lot, 4, 1, 2, 3)"
        end
    end

    def set_datetime_format(datetime)
        return datetime.strftime("%A, %B %e, %Y %I:%M %p")
    end


    def set_receipt_total_charge(parking_slot_level, hours)
        flat_rate = 40

        case parking_slot_level 
        when 1
            exceeding_hrs_charge = 20
        when 2
            exceeding_hrs_charge = 60
        when 3
            exceeding_hrs_charge = 100
        end

        if hours <= 3
            total_charge = flat_rate
        else
            total_charge = flat_rate + (hours - 3) * exceeding_hrs_charge
        end

        total_charge += ((hours - 1) / 24) * 5000

        return total_charge

    end
end
