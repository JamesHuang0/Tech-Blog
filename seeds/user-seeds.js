const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "James",
    email: "james@gmail.com",
    password: "password",
  },
  {
    id: 2,
    username: "James2",
    email: "james2@gmail.com",
    password: "password2",
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;