class LandLord < ActiveRecord::Base

belongs_to :review, inverse_of: :land_lord

end
