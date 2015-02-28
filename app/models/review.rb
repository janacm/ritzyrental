class Review < ActiveRecord::Base


	has_many :land_lords, inverse_of: :review


end
