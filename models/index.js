const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place: {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING
  };

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place: {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY,
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
}

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place: {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY
  },
  age_range: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db: db,
  Restaurant: Restaurant,
  Hotel: Hotel,
  Activity: Activity
};
