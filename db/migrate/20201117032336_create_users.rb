class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    t.string :email, null: false
    t.string :username
    t.string :first_name
    t.string :last_name
    t.string :password_digest, null: false
    t.string :session_token, null: false
    t.integer :age, null: false

    t.timestamps
  end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
