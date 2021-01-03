# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require './images.rb'
require 'open-uri'
ActiveRecord::Base.transaction do 

    User.destroy_all
    Board.destroy_all
    Pin.destroy_all
    
    # space
    img1 = "https://cdn.mos.cms.futurecdn.net/MVqfpKcTdPLgGQbUNpDhZN-1024-80.jpg";
    img2 = "https://cdn.mos.cms.futurecdn.net/M7fDTpDnJcZ4dt3myngzxi-1024-80.jpg";
    img3 = "https://cdn.mos.cms.futurecdn.net/4GPwm2nCYsSGf2paR4cxtL-1024-80.jpg";
    img4= "https://i.pinimg.com/564x/30/04/c9/3004c97b6f91f12e9b103265090a2335.jpg";

    # Physics
    img5 = "https://news.usc.edu/files/2014/10/Quantum-Gravity.jpg";
    img6 = "https://scienceillustrated.com.au/blog/wp-content/uploads/2012/05/shutterstock_13303141-e1337655293109.jpg"
    img7 = "https://scitechdaily.com/images/Schwarzschild-Precession-General-Relativity-scaled.jpg"


    # Picasso
    #cubism
    img8 = "https://i.pinimg.com/564x/c4/66/f6/c466f628530c8adfe931f83286e43b23.jpg"
    img9 ='https://i.pinimg.com/564x/37/df/b1/37dfb1240881ceffb8946bcd67cd6ada.jpg'
    img10= "https://i.pinimg.com/564x/a5/5c/3a/a55c3a4a6e2e7b0ece5222f44db94627.jpg";
    img15 ="https://i.pinimg.com/564x/a6/69/44/a669445b2fdc0099ba81d5e6f9767a95.jpg"

    # splash
    img11= "https://i.pinimg.com/736x/50/28/f7/5028f707f30da2b92c12fddb59d090ea.jpg";
    img12 = "https://i.pinimg.com/564x/dd/6e/c2/dd6ec2a3ef5c5080a3679c414b76636f.jpg"
    img13 = "https://i.pinimg.com/564x/6a/b9/f1/6ab9f1bb9698de48b4416d97428e1912.jpg"
    img14 = "https://i.pinimg.com/474x/34/35/a0/3435a051ab297f8cabb80ae7d4ccf078.jpg"
    # img6=;
    # img7 = "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg";
    # space paintings
    img15 = "https://i.pinimg.com/474x/eb/5e/94/eb5e94420130c769bb7be46ed0b6e998.jpg"
    img16 = "https://i.pinimg.com/474x/49/9e/3c/499e3c04e0f2479b9d036e0b7ac4a5e2.jpg"
    img17 = "https://i.pinimg.com/474x/f0/c7/60/f0c7602361402e4be369ace7bf3d2026.jpg"
    
    
    demo1 = User.create!(
        email: "einstein@gmail.com",
        age: "141",
        password: "123456",
        first_name: "Albert",
        last_name: "Einstein",
        url: "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/",
        location: "New Jersey",
        background: "https://i.ytimg.com/vi/_spYAX6Y3yA/maxresdefault.jpg",
        description: "If metal electrodes are exposed to light, electrical sparks 
        between them occur more readily. For this 'photoelectric effect' to occur, 
        the light waves must be above a certain frequency, however. According to physics
         theory, the light's intensity should be critical. In one of several epoch-making 
         studies beginning in 1905, I explained that light consists of quanta - 'packets' 
         with fixed energies corresponding to certain frequencies. One such light quantum, 
         a photon, must have a certain minimum frequency before it can liberate an electron.",
    )

    demo2 = User.create!(
        email: "picasso@gmail.com",
        age: "139",
        password: "123456"
    )

# Space
    title = [
        'Why is space a vacuum?',

        "Black holes shouldn't echo, but this one might. Score 1 for Stephen Hawking?",
        
        "We Finally Know When Our Milky Way Will Crash Into the Andromeda Galaxy.",
        
        "Flame Nebula",
        
        "String field theory could be the foundation of quantum mechanics",

        "The power of string energy",

        "My General Gravitivity has been proven right",

        "",

        "",

        "",

        "muzagroo abstract",

        "Space Solar System",

        "",

        "Pintura por Laurent Folco",

        "",

        "Les Demoiselles d'Avignon",

        "Free Form - form 1946",

        "Abstract Wall Best Oil",

        "Abstract Wall Paper",

        "Abstract Wall Paper",

        "Borja Guijarro",

        "Tio Pepe",
    ]

    description = [
        'A vacuum is an empty place, which space nearly achieves.',
         
        "When two neutron stars slammed together far off in space, they created a powerful shaking in the universe 
        — gravitational waves that scientists detected on Earth in 2017. Now, sifting through those gravitational wave recordings, 
        a pair of physicists think they've found evidence of a black hole that would violate the neat model drawn 
        from my theory of general relativity.",

        "The monster collision between our Milky Way and fellow spiral galaxy Andromeda will occur about 4.5 billion years
         from now, according to the new research, which is based on observations made by Europe's Gaia spacecraft. Some prominent previous 
         estimates had predicted the crash would happen significantly sooner, in about 3.9 billion years.",

         "Original oil on canvas painting of the Flame Nebula in the constellation Orion This painting is part of my collection 
        Spacescapes and it was exhibited in solo and group exhibitions in New Jersey, USA Title: Flame Nebula One of a kind. 
        Wired, ready to hang. Created and treated with care and love. The painting was cured for a recommended time for an oil 
        painting and protected with a layer of varnish. Since my background is in art restoration I take technical details and 
        knowledge of materials very seriously to bring you the best quality in my paintings for their longevity. 
        Tips: As for all paintings and colors the direct light from the sun is to be avoided because it fades colors with time. 
        Please note there may be a slight difference in colors between the way you see the photos on your screen and the original artwork, 
        due to different displays on the device you are using (computer, phone, tablet).",
    
        "Physicists have long sought to unite quantum mechanics and general relativity, and to explain why both work in their 
        respective domains. First proposed in the 1970s, string theory resolved inconsistencies of quantum gravity and suggested that the 
        fundamental unit of matter was a tiny string, not a point, and that the only possible interactions of matter are strings either joining 
        or splitting.",

        "String physicists assume that energetic pieces of threads are the keys to quantum gravity and to everything else in our 
        perceived reality. The basic elements of this theory are strings or membranes, subatomic one-dimensional energy threads. The vibrations 
        of these strings generate everything out of a vacuum, such as the different characteristics and features of subatomic elementary particles 
        and all elements of the periodic system. Ten and more dimensions are needed to describe a perceived reality, but only Einstein’s four dimensions
        of three-dimensional space and one-dimensional time seem to be sort of “˜rolled out’. The latest attempts to describe nature and the universe 
        by energy strings is the very complex M-Theory.",

        "Observations made with ESO’s Very Large Telescope (VLT) have revealed for the first time that a star orbiting the supermassive 
        black hole at the center of the Milky Way moves just as predicted by Einstein’s general theory of relativity. Its orbit is shaped like a 
        rosette and not like an ellipse as predicted by Newton’s theory of gravity. This long-sought-after result was made possible by increasingly 
        precise measurements over nearly 30 years, which have enabled scientists to unlock the mysteries of the behemoth lurking at the heart of our galaxy.",

        "",

        "",

        "",

        "",

        "",

        "",

        "his is from one of my apprentice.",

        "",

        "",

        "",

        "This is from Art Gallery",

        "glitch, 2340 X 2340 pixels resolution",

        "glitch, 2340 X 2340 pixels resolution",

        "Aperol original still life Cubism 2018",

        "The original cubism painting by Borja Guijarro 
        is painted on canvas. His modern style of still life work 
        makes for an interesting and unique piece of contemporary art. 
        It is signed and ready to be displayed."
    ]

    link = [
        img2,
        img1,
        img3,
        img4,
        img5,
        img6,
        img7,
        img15,
        img18,
        img19,
        img20,
        img21,
        img22,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img16,
        img17,
    ]


    # demo1_pin1 = Pin.create!(
    #     title: 'Why is space a vacuum?',
    #     description: 'A vacuum is an empty place, which space nearly achieves.',
    #     author_id: demo1.id,
    #     link: img2,
    # )


    img19 = "https://i.pinimg.com/564x/72/4b/26/724b2684fa4754c9c0bd0f94f5faa8de.jpg"
    img20 = "https://i.pinimg.com/474x/4c/23/25/4c2325e43c8d5f7e88b4ea9efc30d599.jpg"
    img21 = "https://i.pinimg.com/474x/2e/e4/41/2ee441b8a9bd98efa8c8eb96139d0e4c.jpg"
    img22 = "https://i.pinimg.com/564x/25/10/e1/2510e13aa27f63c4df72237dd8f25070.jpg"

    board1 = Board.create!(
        title: 'Space',
        description: 'This project is about the space and blackhole theory',
        private: false,
        author_id: demo1.id,
    )

    board2 = Board.create!(
        title: 'Physics',
        description: 'This project is about exploring the string theory and my theory of General Relativity',
        private: false,
        author_id: demo1.id,
    )

     board3 = Board.create!(
        title: 'Abstract Art',
        description: 'This is for arts. Yup, I also love arts!',
        private: false,
        author_id: demo1.id,
    )

    board4 = Board.create!(
        title: 'Cubism',
        description: 'This is about Cubism',
        private: true,
        author_id: demo2.id,
    )
    board5 = Board.create!(
        title: 'Inspiration board',
        description: 'I inspired by others too!',
        private: true,
        author_id: demo2.id,
    )

    BoardPin.create!(board_id: board1.id, pin_id: demo1_pin1.id)
    BoardPin.create!(board_id: board1.id, pin_id: demo1_pin2.id)
    BoardPin.create!(board_id: board1.id, pin_id: demo1_pin3.id)
    BoardPin.create!(board_id: board1.id, pin_id: demo1_pin4.id)
    BoardPin.create!(board_id: board2.id, pin_id: demo1_pin5.id)
    BoardPin.create!(board_id: board2.id, pin_id: demo1_pin6.id)
    BoardPin.create!(board_id: board2.id, pin_id: demo1_pin7.id)
    BoardPin.create!(board_id: board3.id, pin_id: demo1_pin8.id)
    BoardPin.create!(board_id: board3.id, pin_id: demo1_pin9.id)
    BoardPin.create!(board_id: board3.id, pin_id: demo1_pin10.id)
    BoardPin.create!(board_id: board3.id, pin_id: demo1_pin11.id)
    BoardPin.create!(board_id: board3.id, pin_id: demo1_pin12.id)
    BoardPin.create!(board_id: board4.id, pin_id: p_pin1.id)
    BoardPin.create!(board_id: board4.id, pin_id: p_pin2.id)
    BoardPin.create!(board_id: board4.id, pin_id: p_pin3.id)
    BoardPin.create!(board_id: board4.id, pin_id: p_pin4.id)
    BoardPin.create!(board_id: board5.id, pin_id: p_pin5.id)
    BoardPin.create!(board_id: board5.id, pin_id: p_pin6.id)
    BoardPin.create!(board_id: board5.id, pin_id: p_pin7.id)
    BoardPin.create!(board_id: board5.id, pin_id: p_pin8.id)
    BoardPin.create!(board_id: board5.id, pin_id: p_pin9.id)

    # pin-archi1 = Pin.create!(
    #     title: '25 Best Examples of Modern Architecture Buildings - Vintagetopia',
    #     description: 'Remote work could have been on the rise for the previous decades, but the majority of people still prefer to do their job at the office',
    #     author_id: demo2.id,
    #     link: img3
    # )
    # pin-archi2 = Pin.create!(
    #     title: 'Doris Arts',
    #     description: 'BIG Architects, Seoul Korea, architecture, architectural design, 
    #     buildings, architecture design idea and inspiration #ArchitecturalArts',
    #     author_id: demo2.id,
    #     link: img4
    # )

    # pin-archi3 = Pin.create!(
    #     title: 'Doris Arts',
    #     description: 'BIG Architects, Seoul Korea, architecture, architectural design, 
    #     buildings, architecture design idea and inspiration #ArchitecturalArts',
    #     author_id: demo1.id
    #     link: img5;
    # )

    
end