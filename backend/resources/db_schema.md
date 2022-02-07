Table users {
  id int [pk] 
  username varchar(30) [not null, unique]
  email varchar(256) [not null, unique]
  hashedPassword varchar [not null]
  createdAt timestamp
  updatedAt timestamp
}

Table spots {
  id int [pk]
  userId int [not null]
  address varchar [not null]
  city varchar [not null]
  zipCode int [not null]
  state varchar(30) [not null]
  country varchar(100) [not null]
  title varchar(50) [not null]
  description text [not null]
  price int [not null]
  guests int [not null]
  bedrooms int [not null]
  bathrooms int [not null]
  createdAt timestamp
  updatedAt timestamp
 }
 Ref: spots.userId > users.id

Table bookings {
  id int [pk]
  spotId int [not null]
  userId int [not null]
  startDate datetime [not null]
  endDate datetime [not null]
  createdAt timestamp [not null]
  updatedAt timestamp [not null]
}
Ref: bookings.spotId > spots.id
Ref: bookings.userId > users.id

npx sequelize model:generate --name Booking --attributes spotId:integer,userId:integer,startDate:datetime,endDate:datetime

Table amenities {
  id int [pk]
  spotId int [not null]
  parking boolean [not null]
  kitchen boolean [not null]
  patio boolean [not null]
  gym boolean [not null]
  pool boolean [not null]
  hotTub boolean [not null]
  pets boolean [not null]
  createdAt timestamp [not null]
  updatedAt timestamp [not null]
}
Ref: amenities.spotId > spots.id

npx sequelize model:generate --name Amenity --attributes spotId:integer,parking:boolean,kitchen:boolean,patio:boolean,gym:boolean,pool:boolean,hotTub:boolean,pets:boolean

Table reviews {
  id int [pk]
  userId int [not null]
  spotId int [not null]
  rating int 
  review text 
  createdAt timestamp [not null]
  updatedAt timestamp [not null]
}
Ref: reviews.userId > users.id
Ref: reviews.spotId > spots.id

npx sequelize model:generate --name Review --attributes userId:integer,spotId:integer,rating:integer,review:text

Table images {
  id int [pk]
  spotId int [not null]
  url varchar [not null]
  createdAt timestamp [not null]
  updatedAt timestamp [not null]
} 
Ref: images.spotId > spots.id

npx sequelize model:generate --name Image --attributes spotId:integer,url:string


Spots
 userId: 1
 https://photos.zillowstatic.com/fp/2fa5a5fa084a68af7ffc10811984f9d0-cc_ft_768.webp

userId: 2
https://photos.zillowstatic.com/fp/cc2c8550c9da0a4b322f554f0b091e05-cc_ft_768.webp

userId: 3
https://photos.zillowstatic.com/fp/ae12399736d94a4122f0953cd4bc613e-uncropped_scaled_within_1536_1152.webp

original: 
https://www.airbnb.com/rooms/plus/7180020?adults=1&children=0&infants=0&check_in=2022-03-26&check_out=2022-04-02&federated_search_id=b35deb6f-1c73-4c66-96d3-fcb2998460f2&source_impression_id=p3_1644264094_WEhBAZoci9rR72wW

userId: 4
https://a0.muscache.com/im/pictures/monet/Select-24230206/original/4fddb1c9-4095-490d-8b25-e26806658560?im_w=1200

original: https://www.airbnb.com/rooms/plus/24230206?adults=1&children=0&infants=0&check_in=2022-04-18&check_out=2022-04-25&federated_search_id=f5dd21ae-1e9f-4135-9a7d-dca1f36f8c3d&source_impression_id=p3_1644264683_0QLLPgz7RpUn32TF

userId: 5
https://a0.muscache.com/im/pictures/ffb0536c-3fc5-4398-9be3-ec8ffe634961.jpg?im_w=1440

userId: 6
https://a0.muscache.com/im/pictures/0823e0cf-9df1-44af-8545-29c05d8329b2.jpg?im_w=1200

userId: 7
https://a0.muscache.com/im/pictures/15af1e4e-8875-49e3-a56e-1f5c343ba8a5.jpg?im_w=1440

userId: 8
https://a0.muscache.com/im/pictures/67932933-12a2-4199-928b-f8304b9c8a09.jpg?im_w=1440

userId: 9
https://a0.muscache.com/im/pictures/miso/Hosting-49161676/original/84e12872-6840-4c5a-9724-439543d4b08f.jpeg?im_w=1200

userID: 10
https://a0.muscache.com/im/pictures/6b41c0ac-2f7e-4b13-9576-a867cabe09db.jpg?im_w=1200

userId: 11
https://a0.muscache.com/im/pictures/miso/Hosting-562593/original/551e9c04-3f52-4dd8-97df-948f2a469520.jpeg?im_w=1200

userId: 12
https://a0.muscache.com/im/pictures/ff0fb0f5-1071-4497-ad8d-0bfe459fb133.jpg?im_w=1440

