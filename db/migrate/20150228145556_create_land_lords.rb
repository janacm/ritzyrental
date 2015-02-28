class CreateLandLords < ActiveRecord::Migration
  def change
    create_table :land_lords do |t|
      t.string :address

      t.timestamps null: false
    end
  end
end
