class Vehicle < ApplicationRecord
    validates :plate_number_id, presence: true, uniqueness: { scope: :plate_number_id, message: "already exists." }
    validates :vehicle_type, presence: true

end