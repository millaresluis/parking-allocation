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
end
