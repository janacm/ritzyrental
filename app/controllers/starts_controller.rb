class StartsController < ApplicationController

	def home
		@review = Review.new
	end

	def property
		@p = params[:search].nil? ? LandLord.find(params[:id]).address : params[:search]

	end

end