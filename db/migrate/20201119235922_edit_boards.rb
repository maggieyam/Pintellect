class EditBoards < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :board_pins_id
    remove_column :boards, :status
    add_column :boards, :end_date, :date
    add_column :boards, :description, :text
    add_column :boards, :private, :boolean, default: false
    rename_column :boards, :date, :start_date
  end
end
