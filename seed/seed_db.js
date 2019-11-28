const mongoose = require("mongoose");
const faker = require("faker");
const User = require("../models/User");
const Record = require("../models/Record");
const Order = require("../models/Order");

(async function () {
  /** CONNECT TO MONGO */
  mongoose.connect("mongodb://localhost:27017/data-server-record-store", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );

  mongoose.connection.on("open", () => {
    console.log(`Connected to the database...`);
  });

  console.log(`First, i will delete all the old users`);

  // DELETE ALL USERS
  try {
    await User.deleteMany({});
    console.log("Old users moved to a better place. Spandau");
  } catch (e) {
    console.log(e);
  }

  // DELETE ALL RECORDS
  try {
    await Record.deleteMany({});
    console.log("Old users moved to a better place. Spandau");
  } catch (e) {
    console.log(e);
  }

  // DELETE ALL ORDERS
  try {
    await Order.deleteMany({});
    console.log("Old users moved to a better place. Spandau");
  } catch (e) {
    console.log(e);
  }

  // CREATE 20 FAKE USERS
  const userPromises = Array(20)
    .fill(null)
    .map(() => {
      const user = new User({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthday: faker.date.past(),
        username: faker.internet.userName(),
        address: {
          city: faker.address.city(),
          street: faker.address.streetName()
        }
      });

      return user.save(); // .save() is a method from mongoose that returns a promise
    });

  try {
    await Promise.all(userPromises);
    console.log("Users stored in the database!");
  } catch (e) {
    console.log(e);
  }

  // CREATE 20 FAKE RECORDS
  const recordPromises = Array(20)
    .fill(null)
    .map(() => {
      const record = new Record({
        title: faker.random.words(),
        artist: faker.internet.userName(),
        year: new Date(faker.date.past()).getFullYear(),
        price: faker.finance.amount()
      });

      return record.save(); // .save() is a method from mongoose that returns a promise
    });

  try {
    await Promise.all(recordPromises);
    console.log("Records stored in the database!");
  } catch (e) {
    console.log(e);
  }

  mongoose.connection.close();
})();