class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :author_id, null: false
      t.string :title
      t.text :description 
      t.text :comments
      t.string :link

      t.timestamps
    end
    add_index :pins, :title
    add_index :pins, :author_id
  end
end
