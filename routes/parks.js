var express = require('express');
var router = express.Router();

// Import the Parks controller
const park_controller = require('../controllers/park');

// GET Parks search results from MongoDB
router.get('/', park_controller.park_view_all_Page);

module.exports = router;
