class EditBoardsDate < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :start_date
    add_column :boards, :start_date, :date
  end
end
