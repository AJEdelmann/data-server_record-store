# data-server_record-store

This repo hosts a traditional RESTfull API using Node, Express and Mongoose.

## The way it works
This repo has several branches with several stages of the development of the final app. The list of changes are being added here below to explain the changes made:

### Stage 01: Mock, database and controllers
In this branch we have set up our initial structure for our API

- We created two simple routes GET and POST for our records data
- We set up `lowdb` in order to store our data in a file
- We then updated our routes in order to use `lowdb`
- We created controllers for our routes in a different directory

### Stage 2: Middleware and CORS
In this branch we created our own middleware functions

- We created a middleware directory
- We set up a middleware function that will add headers to each request
- We incorporated it in our app.

### Stage 3: Routing error and handling
In this branch we expanded our records endpoints and we create new ones for users and orders

- We created DELETE and PUT for the records model
- We created GET, POST,`PUT and DELETE for our users model
- We created GET, POST,`PUT and DELETE for our orders model
- We wrote a middleware function that performs basis error handling.

### Stage 4: Mongoose && Models && Seeding
In this branch we introduced Mongoose and we created our first models. We then created our first models.

- We established our database connection in app.js
- We create our models for our records, users and orders.
- We set up a virtual for our user model.
- We wrote a script that will seed the database with some fake users if run.
- We wrote a script that will purge users if run.

### Stage 5: Mongoose && Controllers
In this branch we connected our controllers with our database.
No more Lowdb.
Mongoose is the future.

- We updated all endpoints of each model using Mongoose.
- We deleted lowdb from our package.json
- Got rid of data folder with lowdb's data file.

### Stage 6: Mongoose && Controllers
In this stage we added validation and sanitization on our user model using express-validator.

- We installed express-validator.
- Based on the express-validator documentation we created some simple rules
  for data validation and sanitization.
- Once everythings worked as intented, we simplified our code by creating
  a validator middleware method.
- Then we made our code even more beautiful and dynamic and so 2019 by splitting
  the validation rules into a seperate directory.



