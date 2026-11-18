var express = require('express');
var router = express.Router();

// Import the Parks controller
const park_controller = require('../controllers/park');

// GET Parks search results from MongoDB
router.get('/', park_controller.park_view_all_Page);

// GET detail page for a single Park
router.get('/detail', park_controller.park_view_one_Page);

// GET page to create a new Park
router.get('/create', park_controller.park_create_Page);

// GET page to update an existing Park
router.get('/update', park_controller.park_update_Page);


module.exports = router;
