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

    def set_datetime_format(datetime)
        return datetime.strftime("%A, %B %e, %Y %I:%M %p")
    end

    def set_db_datetime_format(datetime)
        return datetime.strftime("%Y-%m-%d %H:%M:%S")
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

    def parking_slot_badge_status(status)

        if status == "available"
            parking_slot_status = "bg-success"
        else
            parking_slot_status = "bg-danger"
        end

        return parking_slot_status
    end

    def set_parking_slot_order(entry_point)
        case entry_point
        when 1
            "FIELD(parking_slot_level, 1, 2, 3)"
        when 2
            "FIELD(parking_slot_level, 2, 3, 1)"
        else
            "FIELD(parking_slot_level, 3, 1, 2)"
        end
    end

    def params_active(controller, action, default_class=nil, active_class)
        if action.include?(params[:action]) && controller.include?(params[:controller])
            return active_class
        else
            return default_class    
        end     
    end

end
