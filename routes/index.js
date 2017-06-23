const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const models = require('../models');
const Place = models.Place;
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;

router.get('/', function(req, res, next){
var outerScopeContainer = {};
  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;


