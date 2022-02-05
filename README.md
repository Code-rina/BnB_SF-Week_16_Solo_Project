![Screen Shot 2022-02-04 at 3 26 01 PM](https://user-images.githubusercontent.com/87352324/152616362-84fca2e4-e7c9-458a-a668-27fbb7caebf4.png)

**BnB SF** is a web application for booking and hosting spots in San Francisco. It was inspired by AirBnb and built using React, Redux, Express with PostgreSQL database.

Browse live link to **BnB SF** [here](https://bnbsf.herokuapp.com/).

## BnB SF Home Page

## BnB SF Sign Up Page

## BnB SF Login Page

## BnB SF Spots Page

## BnB SF Spots Detail Page

## BnB SF Host Form Page

## Documentation Links

## Technologies Used
* Javascript
* Express
* React
* Redux
* Sequelize
* PostgreSQL
* CSS
* Git
* Heroku

## Instalation on your local machine
1. To be able to install BnB SF on your local machine, please clone this project repository. 
```
git clone https://github.com/Code-rina/BnB_SF-Week_16_Solo_Project.git
```

2. Install dependencies from the root directory.
```
npm install
```

3. Create s PostrgeSQL user with CREATEDB and PASSWORD in PSQL
```
psql -U CREATE USER <name> WITH PASSWORD <'password'> CREATEDB;
```

4.Create a.env file in the backend directory based on the .env.example found within the respective directory.

5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your port configuration found in your .env file.
```
"proxy": "http://localhost:5000"
```

7. Create a database, migrate, and seed models.
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```

8. Start the server in the backend directory.
```
npm start
```

9. Start the server in your frontend directory, which should open the project in your default browser. If not, navigate to https://localhost:3000 .
```
npm start
```

You are all set. You can use the Demo user or create an account to start using BnB SF.


## Development

## Main Features

## Challenges (put examples of code)

