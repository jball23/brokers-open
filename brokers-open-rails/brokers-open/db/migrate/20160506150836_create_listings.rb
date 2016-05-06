class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|

      t.string  :date
      t.string  :time_start
      t.string  :time_end
      t.string  :address
      t.string  :city
      t.string  :state
      t.string  :zipcode
      t.string  :county
      t.integer :list_price
      t.string  :property_status
      t.string  :property_type
      t.string  :mls_num
      t.integer :bedrooms_num
      t.integer :full_baths
      t.integer :half_baths
      t.string  :sponsors
      t.text    :property_description
      t.boolean :food_offered, :default => false
      t.text    :food_description
      t.text    :incentive
      t.string  :property_image
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
