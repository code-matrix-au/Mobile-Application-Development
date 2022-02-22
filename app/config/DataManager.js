export default class DataManager  {
    static myInstance = null;
    userID = "";

    tours=[
        
        {
            userid:["ashwin.bhanderi102@gmail.com"],
            name:"Sydney Opera House",
            image: require("../assets/t1.jpg"),
            description:"One of the world's great icons, the Sydney Opera House is a UNESCO World Heritage Site and the star attraction on the glittering harbor. This graceful building, shaped like shells or billowing sails, perches on a finger of land surrounded by water. Snap a photo while gliding by on a harbor cruise, relax at one of the restaurants, stroll around its exterior, or take an organized tour of this magnificent structure, which encompasses theaters, studios, exhibition rooms, a concert hall, and cinema. Book a Sydney Opera House Guided Walking Tour to learn about the history and get a behind-the-scenes look at this famous building. This is a flexible ticket that allows you to join any one of the tours throughout the day, departing every half hour from 9am to 5pm. Avid photographers head to Mrs Macquarie's Chair for one of the best photo opportunities. Note that the building is currently undergoing a $202-million upgrade, slated for completion in early 2021, but it will continue to operate during the restoration.",
            address:"Bennelong Point, Sydney",
         },
         {
            userid:[],
            name:"Sydney Harbour Bridge",
            image: require("../assets/t1.jpg"),
            description:"The Sydney Harbour Bridge or Coathanger, as locals call it, was the city's best-known landmark prior to construction of the Sydney Opera House. Supported by massive double piers at each end, it was built in 1932 and remains the world's largest steel arch bridge, connecting the harbor's north and south shores in a single curve rising 134 meters above the water. Along its length run two railway lines and eight lanes for road traffic, the direction of which can be varied according to traffic flow. Increasing bridge traffic encouraged construction of a harbor tunnel in 1992 to ease congestion, but motorists can still drive over the bridge for blue-water views. Pedestrians can stroll across on walkways or join a guided ascent through BridgeClimb for a breathtaking panorama of the city and harbor. To learn about the fascinating history of the bridge's construction, visit the museum in the southeastern pier.",
            address:"5 Cumberland Street, Sydney",

         },
         {
            userid:[],
            name:"",
          //  image: require("../assets/"),
            description:"",
            address:"",

         },
         {
            userid:[],
            name:"",
         //   image: require("../assets/"),
            description:"",
            address:"",

         },
         {
            userid:[],
            name:"",
          //  image: require("../assets/"),
            description:"",
            address:"",

         },
         {
            userid:[],
            name:"",
          //  image: require("../assets/"),
            description:"",
            address:"",

         },
         {
            userid:[],
            name:"",
          //  image: require("../assets/"),
            description:"",
            address:"",

         },
         {
            userid:[],
            name:"",
           // image: require("../assets/"),
            description:"",
            address:"",

         }
         



]

    restaurants =[
            {
                userid:["js@gmail.com","ashwin.bhanderi102@gmail.com"],
                restaurantid:"1",
                name:"Bistrot 916",
                image:require("../assets/r1.jpg"),
                description:"Surely one of the biggest openings of the year, Bistrot 916 is a neo-French restaurant in Potts Point helmed by none other than Dan Pepperell (best known for his work at 10 William St, Alberto’s Lounge, and Hubert). He serves as co-owner along with Michael Clift and sommelier Andy Tyson, forming a supergroup of sorts that oversee a French bistro-style menu favouring seafood.",
            },
            {
                userid:[],
                restaurantid:"2",
                name:"Woodcut, Barangaroo",
                image: require("../assets/r2.jpg"),
                description:"Former owner and chef of widely acclaimed The Bridge Room, Ross Lusted, now finds himself overseeing one of the biggest new restaurant openings of 2021, alongside his wife and acclaimed restaurateur Sunny. Woodcut, so far the culinary champion of the new Crown Casino, tracks everything from black garlic bread and pricey raw fish tasting plates, to immense sirloin steaks and fruit-forward desserts crafted by the highly dependable Lauren Eldridge.",
            },
            {
                userid:[],
                restaurantid:"3",
                name:"Esteban, CBD",
                image: require("../assets/r3.jpg"),
                description:"Opened on Temperance Lane, by the same team behind Paddington’s Tequila Mockingbird, Esteban is a two-storey powerhouse of Mexican flavours and art-deco aesthetics. There’s also the unsubtle boast that here lies Australia’s collection of premium Tequila and Mezcal, some pushed around in tasting trolleys with cheese and chocolate pairings, as diners travel a spectrum of tastes from Mayan, Aztec, Spanish, Portuguese and Afro-Caribbean cultures.",
            },
            {
                userid:[],
                restaurantid:"4",
                name:"a’Mare, Barangaroo",
                image: require("../assets/r4.jpg"),
                description:"Sure, Sydney doesn’t really need a new Italian restaurant, but no one with taste would dare pass up a new opening from Ormeggio at the Spit mastermind Alessandro Pavoni. A seafood-focused take on regionality, this Italian fine diner is playing at another level, with lush options like $295 ARS Italica oscietra caviar and a $180 1kg veal cutlet alla Milanese. There’s also a range of pasta, from the $35 hand-cut tagliatelle with slow cooked Wagyu Bolognese ragout, and a $220 Mancini Spaghetti XXL with rock lobster.",
            },
            {
                userid:[],
                restaurantid:"5",
                name:"Cucina Porto, Pyrmont",
                image: require("../assets/r5.jpeg"),
                description:"Joining the likes of Sokyo and BLACK Bar & Grill, Cucina Porto is set to be The Star’s new casual Italian eatery, with a kitchen led by Executive Chef Martino Pulito. Opened as the first of several new dining concepts in the casino complex, Cucina Porto will draw heavily on heritage recipes from Pulito’s hometown of Puglia, which should mean a lot of orecchiette and baked fish dishes on the menu, along with classic Italian snacks and pizzas, paired with what’s being touted as a “Negroni progression menu”. Cucina Porto opens on Wednesday 25th November.",
            }

    ]

    hotels=[
        {
            userid:["js@gmail.com","ashwin.bhanderi102@gmail.com"],
            hotelid:"1",
            name:"Sofitel Sydney Darling Harbour",
            image: require("../assets/h1.jpg"),
            description:"This 590-room five-star beauty is Sydney’s first luxury hotel built in the CBD (central business district) since 1999. Splash out on one of the corner rooms with a view of Darling Harbour. The bedroom has a long wall of floor-to-ceiling windows, but the bathroom has one of the best views in the city with sheer glass on two sides. Enjoy a long soak while watching the city buzz by at its regular frantic pace.",
        },
        {
            userid:["ashwin.bhanderi102@gmail.com"],
            hotelid:"2",
            name:"Pier One Sydney Harbour",
            image: require("../assets/h2.jpg"),
            description:"Every room in this beautifully restored finger wharf in Walsh Bay is unique, but one thing you can guarantee is that your stay will be a high-luxe affair from start to finish. Be sure to book in for a meal at the hotel's in-house restaurant The Gantry, one of the most highly regarded eateries in Sydney. In search of a posh stay with your pooch? Pier One has special wharf-facing suites designed specifically with puppy-parents in mind.",
        },
        {
            userid:["ashwin.bhanderi102@gmail.com"],
            hotelid:"3",
            name:"The Langham Sydney",
            image: require("../assets/h3.jpg"),
            description:"For old-world opulence, the Langham is the place to be. Friday afternoons are reserved for tea, scones and petit fours – a fixture of the hotel since 1865. With the charm and ruffled curtains of a bouqtiue hotel, but the class and glamour of an international institution, the Langham will have you feeling like a royal with its plush suites, panelled walls (for real) and sumptuous, velvet furnishings – and that's before you set your sights on the Observatory Suite's ornate, gilded fireplace.",
        },
        {
            
            userid:["ashwin.bhanderi102@gmail.com"],
            hotelid:"4",
            name:"Shangri-La Hotel Sydney",
            image: require("../assets/h4.jpg"),
            description:"The hotel was extensively renovated in 2015 with a fresh palette of gold and silver and specially commissioned carpets and artworks. A spectacular chandelier made of three brass rings hangs in the atrium of Horizon Club and can be seen from many points on the foreshore, fulfilling the architect’s original vision of the building as a ‘lighthouse’. The rooms evoke classic luxury with marble bathrooms and the largest windows of any of the city’s harbourfront hotels. ",
        },
        {
            userid:[],
            hotelid:"5",
            name:"The InterContinental Sydney Double Bay",
            image: require("../assets/h5.jpg"),
            description:"There are 140 contemporary rooms and suites, a rooftop pool with cabanas, several restaurants, bars and retail spaces. In its previous iterations it hosted US presidents, our own Prime Ministers (Bob Hawke famously ran through the area in budgie smugglers), Princess Diana and, sadly, Michael Hutchence on the last night of his life. Now the InterContinental Sydney Double Bay is at its brilliant best after a huge renovation.",
        },
        {
            userid:[],
            hotelid:"6",
            name:"Park Hyatt",
            image: require("../assets/h6.jpg"),
            description:"The jaw-dropping, close-up vista of both the Opera House and the Harbour Bridge is a major selling point, but you get what you pay for (and that's a lot) – the cheaper rooms offer just glimpses of what the more expensive suites have framed through their windows. A recent refurbishment has transformed the top-end suites into über-minimalist apartment-style hangouts. Extras include a rooftop swimming pool, deluxe spa and much-vaunted 24-hour butler service.",
        },
        {
            userid:[],
            hotelid:"7",
            name:"The Darling",
            image: require("../assets/h7.jpg"),
            description:"You know you're in a swanky hotel when the menus extend to the bedding. You're sure to get a good night's sleep here with 400-thread Egyptian cotton sheets and a hand-picked pillow menu, so you can find a neck height that's just right. Even the name sounds posh – The Darling – and they make sure that's reflected in every inch beyond the bed, too, from the textured wallpaper and bespoke furniture, to eucalyptus-scented pool.",
        },
        {
            userid:[],
            hotelid:"8",
            name:"Taronga Zoo Wildlife Retreat",
            image: require("../assets/h8.jpg"),
            description:"Taronga has taken bold strides into the luxury accommodation market with its purpose-built 62-room Retreat. This complex of sleek, timber-clad lodges encircling a private bushland garden full of native fauna is a fusion of elegant sophistication and sustainable design, where wildlife and the high-life exist side by side.",
        },
        {
            userid:[],
            hotelid:"9",
            name:"Ovolo Woolloomooloo",
            image: require("../assets/h9.jpg"),
            description:"There’s a cute little pool here for the lap-swimming inclined and plenty of rooms have harbour views. Book into one of two Insta-worthy, ’70s referrencing ‘Rockstar Suites’, which have harbour views, eccentric neon lighting, hammock nooks and round, marble bars.",
        },
        {
            userid:[],
            hotelid:"10",
            name:"West Hotel",
            image: require("../assets/h10.jpg"),
            description:"Our CBD is not like Melbourne’s. There you expect the laneways to be teeming with small bars and boutique hotels for a double dose of whimsy when you’re staying in the heart of the city. In Sydney it’s a different story, which is why it’s surprising that they’ve managed to create such an intimate feel at the new West Hotel Sydney, a boutique accommodation project from Hilton down amongst Barangaroo’s new towers.",
        },
    ]


    users = [
        {
            fullname:"Billie Eilish",
            email: "billie@gmail.com",
            password: "1234",
            image: require('../assets/lion.jpg'),
        },
        {
            fullname:"Jon Snow",
            email: "js@gmail.com",
            password: "2345",
            image: require('../assets/lion.jpg'),
        },
        {   
            fullname:"Ashwin Bhanderi",
            email: "ashwin.bhanderi102@gmail.com",
            password: "1234",
            image: require('../assets/lion.jpg'),
        }
    ];





    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    getUser({email}){
        return this.users.find((user) => user.email === email);
    }

    setUserID(id){
        this.userID = id;
    }

    getRestaurants(id){
        return this.restaurants.filter((restaurant)=> restaurant.restaurantid.includes(id));
    }
 
    getHotels(id){
           return this.hotels.filter((hotel) => hotel.userid.includes(id));   
        
    }
    getTours(id){
        return this.tours.filter((tour) => tour.userid.includes(id));   
     
 }







    addRestaurant(){
        
    }


    addUser(user) {
        this.users.push(user);
    }



        
}