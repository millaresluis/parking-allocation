class ParkingReceipt < ApplicationRecord

    validates :total_charge, presence: true
    validates :total_hrs, presence: true
    validates :datetime_in, presence: true
    validates :datetime_out, presence: true

end