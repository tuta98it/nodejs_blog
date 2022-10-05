const express = require('express');
const route = express.Router();

const searchController = require('../app/controllers/SearchController');

route.use('/', searchController.index);

module.exports = route;
