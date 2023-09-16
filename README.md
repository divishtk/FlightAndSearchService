# Welcome to Flight Services

## Project Setup
- Clone the project .
- Execute npm install command.
- Create .env file in root directory with following env variable 
    - `PORT=3000`
- Inside config folder , create config.json file and push below code.

```

{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }x


```
- Note -> To initialize sequelize , run npx sequelize init (It will create config , miggration, seeders,models) folders.
- Once added db config , go to src folder from terminal and execute below command , make sure MYSQL conenction is on.
    - `npx sequelize db:create`
- Then execute
    - `npx sequelize db:migrate`


## DB DESIGN
 -Airplane Table
 -Flight
 -Airport
 -City

 - A flight belongs to an airplane , but an airplane belong to many flights
 - A city has many airports but one airports belong to one city
 - One airport can have many flights but flights belong to one airport.