'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
    {
     userId: 12,
     spotId: 1,
     rating: 3,
     review: "We enjoyed our stay at this wonderful victorian home. The amenities are as described and it is a quick walk to anything you might need. The only thing negative I would say was that it did note feel very safe walking to this place at night, although we felt safe in the neighborhood during the day",
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    userId: 11,
    spotId: 1,
    rating: 5,
    review: "This place is truly one of a kind. We loved our time in San Francisco and next time we come we will definitely stay here again",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 10,
    spotId: 1,
    rating: 4,
    review: "This loft was exactly what we were looking for. It was spacious, clean with great little touches from the host. We did enjoy some time in the courtyard as well after a long day walking around the city. Definitely highly recommend staying here.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 12,
    spotId: 2,
    rating: 5,
    review: "Great space, great value, super clean, comfy beds, nice furnishings! Overall a great stay!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 8,
    spotId: 2,
    rating: 2,
    review: "The information provided about the unit is very accurate and upfront. Parking can be very difficult in the neighborhood (and all over San Francisco), but we were aware of that beforehand. The unit is really cute and has pretty much anything you'd need. There are a number of restaurants and bars within walking distance.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 9,
    spotId: 2,
    rating: 3,
    review: "What a cute little studio apartment! Very clean, comfortable, and well-stocked. We appreciated the binder full of information about the city and places to go. The location was great, very close to a main street with a lot of shops and restaurants, but still quiet. Definitely a great choice if you're visiting San Francisco!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 6,
    spotId: 3,
    rating: 5,
    review: "This B&B and the hosts were fantastic! Great location and the place was incredibly homey, I would 100% recommend and stay here again.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 5,
    spotId: 3,
    rating: 5,
    review: "What a cute little studio apartment! Very clean, comfortable, and well-stocked. We appreciated the binder full of information about the city and places to go. The location was great, very close to a main street with a lot of shops and restaurants, but still quiet. Definitely a great choice if you're visiting San Francisco!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 7,
    spotId: 3,
    rating: 4,
    review: "Incredible stay with great hosts! Perfectly sized and in a very safe location. Make sure to read the parking notices, and be prepared to walk a little to get to the place if you can’t find parking.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 9,
    spotId: 4,
    rating: 5,
    review: "A great place to come back to at the end of the day after being out and about. Plenty of great restaurants nearby and a short drive to most tourist spots. Footsteps can be a bit loud throughout the day but no issues after quiet hours; also, would not recommend bringing a car as parking nearby can be a hassle. Overall really enjoyed staying here and would recommend!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 6,
    spotId: 4,
    rating: 3,
    review: "Lovely little affordable place in SF. The bed was super comfy, place was extremely clean. Only small complaint is you can really hear people walking around upstairs. Otherwise, everything was lovely and I would definitely stay here again next time I come into town.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 12,
    spotId: 4,
    rating: 5,
    review: "The cutest B&B I have stayed out! Super clean, home-y, amazing location, and had very thoughtful things in a home that you would need. I would recommend to anyone.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 10,
    spotId: 5,
    rating: 4,
    review: "Great location! We loved the trip would stay again!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 8,
    spotId: 5,
    rating: 5,
    review: "Beautiful and clean place. Walking distance to many restaurants. Extremely kind people. I would highly recommend you stay here the next time you visit San Francisco.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 1,
    spotId: 6,
    rating: 4,
    review: "The space was so clean, the hosts were flexible, and it offered many amenities to improve our stay. I would recommend staying here any day!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    spotId: 6,
    rating: 5,
    review: "Such a perfect place! The set up was so nice and there were so many things to do just around the corner. Great food nearby and nearby bus stops for easy transportation. Definitely would stay again!!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 3,
    spotId: 7,
    rating: 3,
    review: "Great place to return back to after a busy day. We had access to a car so I can’t comment on using public transportation to get around. It felt like a nice location to be able to reach all the things we wanted to do within 20 to 30 minutes. I am trying to find something that I could suggest to improve a persons stay. The only thing we ran into was needing a pen and piece of paper to jot down some information. Add that to a drawer and all our needs would have been met. I would recommend this home to anyone looking for a place to stay outside the heart of SF. The bottle of wine, chocolate, and local coffee was a perfect touch.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 4,
    spotId: 7,
    rating: 4,
    review: "Super clean and easy to access spot. You can actually see twin peeks from the top of the hill - it's a lovely little neighborhood. My husband and I stayed a whole week while working in SF and it was the perfect home base for us.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    spotId: 8,
    rating: 4,
    review: "Wonderful, clean, cozy place in a great neighborhood with many walk-to conveniences.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 4,
    spotId: 8,
    rating: 5,
    review: "Great, private apartment on the ground floor of a house located on a side street in southern part of San Francisco. The space was clean and intimate with access to a full private kitchen/bathroom. Great amenities available (coffee, towels, etc.) The apartment had a TV with access to reliable, fast internet. There was MUNI/BART close by for travel downtown. Would definitely stay again.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 5,
    spotId: 8,
    rating: 5,
    review: "It was such a clean place and even better than I expected. Great location and very central to a lot of places. Parking could be a little difficult on certain days but overall a very wonderful experience.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 6,
    spotId: 9,
    rating: 5,
    review: "Would recommend 10/10 times. Amazing host & also a beautiful area.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 4,
    spotId: 9,
    rating: 4,
    review: "Great place for rest. Lots of cool restaurants in the area. I enjoyed renting a bike down the road and exploring most of San Francisco.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 7,
    spotId: 10,
    rating: 4,
    review: "The space was very clean and large. It was comfortable and the location was convenient. It felt private enough— like staying in an apartment. I couldn’t have picked a better spot!",
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    userId: 8,
    spotId: 10,
    rating: 5,
    review: "We were very satisfied with the accurate representation of this place! In a very cute neighborhood close to mission street. Easy access to public transport. Wonderful parks nearby. Highly recommend staying here! Thanks again!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 12,
    spotId: 10,
    rating: 5,
    review: "Had a great stay! Really close to bus stops. Easy for me to get around the city. Very responsive and accommodating host.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 9,
    spotId: 11,
    rating: 4,
    review: "Excellent stay in an adorable neighborhood. It was quiet, clean and perfect for my work trip.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 7,
    spotId: 11,
    rating: 5,
    review: "Perfect studio space ideally located, steps away from great food, nightlife and public transit. Plus an extremely comfortable bed, and a tub! Highly recommended for smaller groups and solo travelers.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 10,
    spotId: 12,
    rating: 2,
    review: "This place is ok! The hosts were kind and responsive! We had an issue with the bathtub not draining and within 5 minutes they were down there fixing the problem! I would definitely recommend staying here!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    userId: 2,
    spotId: 12,
    rating: 4,
    review: "Great find in the city. Only stayed two nights but definitely recommend to anyone needing a longer booking. Lots of character and very cozy but super stylish too. The place was immaculate and the bathroom stocked with toiletries. Comfy bed and the temperature was perfect. Often when I stay in the city, the rooms I get are freezing cold at night. Not here. Very well insulated and the hosts were very friendly.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
