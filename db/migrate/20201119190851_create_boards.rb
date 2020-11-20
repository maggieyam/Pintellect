class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :author_id, null: false
      t.integer :board_pins_id, null: false
      t.string :title, null: false
      t.boolean :status, null: false
      t.date :date, null: false

      t.timestamps
    end
    add_index :boards, :author_id
    add_index :boards, :board_pins_id
    add_index :boards, :title
  end
end
