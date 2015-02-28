class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :management
      t.integer :condition
      t.integer :pest
      t.integer :social

      t.timestamps null: false
    end
  end
end
