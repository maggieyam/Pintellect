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
        link: "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg"
    )


    pin2 = Pin.create!(
        title: 'Pintura por Laurent Folco',
        description: 'This is from someone else.',
        author_id: demo1.id
    )

    pin-archi1 = Pin.create!(
        title: '25 Best Examples of Modern Architecture Buildings - Vintagetopia',
        description: 'Remote work could have been on the rise for the previous decades, but the majority of people still prefer to do their job at the office',
        author_id: demo1.id
        link: "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg"
    )
    pin-archi2 = Pin.create!(
        title: 'Doris Arts',
        description: 'BIG Architects, Seoul Korea, architecture, architectural design, 
        buildings, architecture design idea and inspiration #ArchitecturalArts',
        author_id: demo1.id
        link: "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg"
    )

    pin-archi3 = Pin.create!(
        title: 'Doris Arts',
        description: 'BIG Architects, Seoul Korea, architecture, architectural design, 
        buildings, architecture design idea and inspiration #ArchitecturalArts',
        author_id: demo1.id
        link: "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg"
    )

    
end