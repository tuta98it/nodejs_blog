const express = require('express');
const route = express.Router();

const homeController = require('../app/controllers/NewsController');

route.use('/', homeController.index);

module.exports = route;
