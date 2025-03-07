class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :author_id, null: false
      t.integer :follower_id

      t.timestamps
    end
    add_index :follows, :author_id
  end
end
