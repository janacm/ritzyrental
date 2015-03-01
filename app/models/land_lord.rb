class LandLord < ActiveRecord::Base

belongs_to :review, inverse_of: :land_lord

validates :address, presence: true, uniqueness: true

def reviewlist temp_address

	r = Review.all
	arr = Array.new
	
	r.each do |e|
		arr.push e if temp_address.eql? e.address
	end

	return arr

end

end
