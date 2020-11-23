# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 

    User.destroy_all
    Board.destroy_all
    Pin.destroy_all

    demo1 = User.create!(
        email: "einstein@gmail.com",
        age: "141",
        password: "123456"
    )

    demo2 = User.create!(
        email: "picasso@gmail.com",
        age: "139",
        password: "123456"
    )

    board1 = Board.create!(
        title: 'Space',
        description: 'This project is about exploring the space',
        private: false,
        author_id: demo1.id,
    )
    board2 = Board.create!(
        title: 'Cubism',
        description: 'This is about Cubism',
        private: true,
        author_id: demo2.id,
    )

    pin1 = Pin.create!(
        title: 'Black hole',
        description: 'This is the first photo of black hole.',
        author_id: demo1.id
    )


    pin2 = Pin.create!(
        title: 'Pintura por Laurent Folco',
        description: 'This is from someone else.',
        author_id: demo1.id
    )
end