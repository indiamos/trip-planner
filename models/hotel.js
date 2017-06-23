const db = require('./db');
const Sequelize = require('sequelize');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 1, max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

module.exports = Hotel;
