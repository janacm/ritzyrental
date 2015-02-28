class AddressToReviews < ActiveRecord::Migration
  def change
  	add_column :reviews, :address, :string
  end
end
