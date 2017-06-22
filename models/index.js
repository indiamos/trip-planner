const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner');

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
  };

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1, max: 5
    }
  }
}

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING
  }
})

var Place = db.define('place', {
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.ARRAY(Sequelize.FLOAT)}
  })

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  Restaurant: Restaurant,
  Hotel: Hotel,
  Activity: Activity,
  Place: Place
};
