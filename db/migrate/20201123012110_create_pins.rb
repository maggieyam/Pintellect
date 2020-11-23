class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :author_id
      t.string :title
      t.text :description
      t.text :comments
      t.string :link

      t.timestamps
    end
  end
end
