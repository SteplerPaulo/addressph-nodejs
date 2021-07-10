# addressph-nodejs
 Philippines Address API

Created Using NodeJs, MySQL, ExpressJs, Sequelize

How to use?

Step 1: Clone or download repo
Step 2: Import addressph.sql
Step 3: RUN npm install
Step 4: RUN nodemon
Step 5: That's it! Thank you! ^_^

How to consume?

SAMPLE FIND ALL
###
GET http://localhost:8081/api/barangays
###
GET http://localhost:8081/api/countries
###
GET http://localhost:8081/api/municipalities

###
GET http://localhost:8081/api/provinces

SAMPLE FIND WITH FILTER
###
GET http://localhost:8081/api/municipalities?name=Lipa City
###
GET http://localhost:8081/api/provinces?name=Batangas
