// const Sequelize = require('sequelize');
const db = require('./db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

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
