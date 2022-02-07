'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
     userId: 1,
     address: "453 Dolores Street",
     city: "San Francisco",
     zipCode: 94110,
     state: "California",
     country: "USA",
     title: "Beautiful Victorian House",
     description: "Welcome to our charming Victorian home in between the famous sunny Castro and the hip Mission District. Just blocks away from restaurants, cafes and boutiques of these areas, this spacious flat evokes Victorian charm, but with modern amenities. The property is conveniently located a block away from the San Francisco MUNI light rail system, which is a short ride to main attractions throughout the city. In addition, Dolores Park is just one block away.",
     price: 349,
     guests: 4,
     bedrooms: 2,
     bathrooms: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      userId: 2,
      address: "1597 Polk Street",
      city: "San Francisco",
      zipCode: 94109,
      state: "California",
      country: "USA",
      title: "Luxurious home with a backyard",
      description: "Enjoy a one-of-a kind experience at this centrally-located apartment in Nob Hill. This apartment is a true oasis - featuring a huge backyard with dining table, BBQ and fire pit as well as a roof deck with Golden Gate views. Newly renovated modern kitchen that is fully stocked! Walking distance to many attractions including Polk Street, Union Square, Financial District and North Beach. Trader Joes, Whole Foods, CVS and multiple parks are within blocks.",
      price: 379,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 3,
      address: "438 Clementina Street",
      city: "San Francisco",
      zipCode: 94103,
      state: "California",
      country: "USA",
      title: "Private, comfortable and spacious loft",
      description: "Our SoMa Loft - is a private, airy and bright SoMa loft style apartment. Unwind amongst the globally inspired decor, while the sun streams in through the giant windows, or head into the shared courtyard for a nap in the sun.",
      price: 339,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 4,
      address: "837 Folsom Street",
      city: "San Francisco",
      zipCode: 94107,
      state: "California",
      country: "USA",
      title: "Inspiring Skyline Views from a Hip Loft in SoMa",
      description: "Brew coffee in a kitchen with bold wood cabinets, then curl up with a book on a cushioned bench set along floor-to-ceiling windows offering skyline views. Modern furnishings and colorful decor forge a trendy vibe within this bright loft apartment.",
      price: 419,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 5,
      address: "199 Ellsworth Street",
      city: "San Francisco",
      zipCode: 94110,
      state: "California",
      country: "USA",
      title: "Newly built Bernal Heights Studio",
      description: "Welcome to my new build, modern studio with its own private entrance, walk-in closet, bathroom, kitchenette and peaceful outdoor space with outdoor dining set, grill, and lounge chairs. I am located on a quiet street in the Bernal Heights area and about a 5min walk to Bernal Hill outdoor space, 20min walk to the shops, bars and restaurants on Cortland Avenue and 10min walk from Precita Park with local cafes, grocery store, and the beautiful Park.",
      price: 119,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 6,
      address: "435 22nd Street",
      city: "San Francisco",
      zipCode: 94110,
      state: "California",
      country: "USA",
      title: "Relaxing and private guest suite, with views!",
      description: "Come back to your own space to relax after enjoying the city. My guest suite has a kitchenette and comfy living room with lots of seating for you to watch free Netflix or Amazon Prime on a large TV if you want to stay home for the evening. The separate bedroom has lots of closet space and a comfortable queen size bed. The bathroom has a spacious shower with good water pressure and all the towels and basic toiletries you'll need.",
      price: 99,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 7,
      address: "1464 La Playa Street",
      city: "San Francisco",
      zipCode: 94122,
      state: "California",
      country: "USA",
      title: "Outer Sunset Surf Shack",
      description: "Welcome to your beach house in the city! Conveniently close to downtown via public transit yet 3 blocks from the ocean. Walking distance to cute shops, restaurants and cafes in the hip Outer Sunset neighborhood. As artists, the home is filled with original woodworking, ceramics and more. You'll have everything you'd need for a long stay or a quick trip.",
      price: 135,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 8,
      address: "27 Rossmoor Dr",
      city: "San Francisco",
      zipCode: 94132,
      state: "California",
      country: "USA",
      title: "Sweet Garden Suite with Private Entrance",
      description: "This lovely, light filled suite has a private entrance through the shared garden space. Newly renovated, the suite has a private bedroom, bathroom and media room, with an amply equipped non-cook kitchenette. The beautiful shared patio with gas fire pit is available for use anytime. We welcome people from all nations, backgrounds and ages and can accommodate one child. The apartment is directly below our main living space, so you will hear muffled conversation and light footfall.",
      price: 159,
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 9,
      address: "341 Vernon Street",
      city: "San Francisco",
      zipCode: 94132,
      state: "California",
      country: "USA",
      title: "Cozy Private Guest Suite with Backyard",
      description: "Stay in a beautiful, peaceful, remodeled one bedroom private guest suite, with a private entrance, free driveway parking, and a shared yard, located in the exclusive residential neighborhood Lakeside/Merced Heights in San Francisco. SF State University, Park Merced, Stonestown mall (Trader Joe's, Target, coffee shops, food court), and golf courses within walking distance. 5 min walk to public transportation (Muni) to anywhere in the city. 10 minutes car ride from SFO airport!",
      price: 219,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 10,
      address: "818 Leavenworth Street",
      city: "San Francisco",
      zipCode: 94109,
      state: "California",
      country: "USA",
      title: "Cozy Remodeled One Bedroom Apartment",
      description: "This is a unique rear-facing, one bedroom flat. It's both functional and beautiful with a large living room with decorative moldings, a grand circular bedroom with a center-tilting bookcase, and an eat-in kitchen area. In the back of the building is a peaceful garden taken straight out of a novel.",
      price: 149,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 11,
      address: "289 Chestnut Street",
      city: "San Francisco",
      zipCode: 94133,
      state: "California",
      country: "USA",
      title: "Beauty in the Heart of North Beach",
      description: "This is a beautiful, modern, fully furnished, one bedroom apartment perched directly in the heart of North Beach and Little Italy. The apartment runs the full length of the building and is full of light front to back. In the living room you have a stunning view of the bay, the Golden Gate Bridge, and Coit Tower. In the back bedroom you have a lovely view of the backyard plants and trees and very quiet to sleep peacefully. This is ideal for 1 person or a couple, though I have a comfortable queen-size air mattress. Just outside the building and steps away are all the restaurants and shops of North Beach and Little Italy. You can walk to Chinatown in 5 minutes, Fisherman's Wharf in 10, and downtown offices in 15. Or, you can hop on several different MUNI lines that stop a block away.",
      price: 209,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: 12,
      address: "111 Bernard Street",
      city: "San Francisco",
      zipCode: 94109,
      state: "California",
      country: "USA",
      title: "Apartment in Victorian Home with Rooftop Deck",
      description: "Lounge or work on the roof deck of this exclusive contemporary apartment. Gaze out across spectacular views of Alcatraz and East Bay, or unwind in this chic design space set in a Victorian home atop Russian Hill, featuring a private entrance.",
      price: 559,
      guests: 5,
      bedrooms: 3,
      bathrooms: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
