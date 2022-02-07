Table users {
  id int [pk] 
  username varchar(25) [not null, unique]
  email varchar(100) [not null, unique]
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

Table images {
  id int [pk]
  spotId int [not null]
  url varchar [not null]
  createdAt timestamp [not null]
  updatedAt timestamp [not null]
} 
Ref: images.spotId > spots.id
<!-- 
// user icon
// <i class="far fa-user-circle"></i> -->