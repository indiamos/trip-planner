// const Sequelize = require('sequelize');

const db = require('../db');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place: {
    // type: Sequelize.STRING,
    // allowNull: false
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY,
    cuisine: Sequelize.STRING,
    price: Sequelize.INTEGER
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  amenities: {
    type: Sequelize.STRING,

  }







})




