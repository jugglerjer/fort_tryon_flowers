class CreateFlowers < ActiveRecord::Migration
  def change
    create_table :flowers do |t|
      t.text :description
      t.integer :image_number

      t.timestamps
    end
  end
end
