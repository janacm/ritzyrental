class LandLord < ActiveRecord::Base

belongs_to :review, inverse_of: :land_lord

validates :address, presence: true, uniqueness: true

end
