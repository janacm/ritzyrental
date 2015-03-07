class StartsController < ApplicationController

	def home
		@review = Review.new
	end

	def property

		@address = params[:search].nil? ? LandLord.find(params[:id]).address : params[:search]
		@reviews = LandLord.first.reviewlist @address

	end

end