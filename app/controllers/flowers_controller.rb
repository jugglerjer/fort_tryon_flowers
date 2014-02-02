class FlowersController < ApplicationController
  
	require "#{Rails.root}/lib/assets/flowers"

  def index
  	prep_flowers
  	@flowers = FLOWERS
  end

  def prep_flowers
  
  	# Add a zero to the front of two-digit flower numbers
  	FLOWERS.each do |flower|
  		if flower[:image_number].length == 2
  			flower[:image_number] = "0" << flower[:image_number]
  		end
  	end

  end

end