class EditUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :description, :text
    add_column :users, :url, :string
    add_column :users, :location, :string
    add_column :users, :background, :string
  end
end
