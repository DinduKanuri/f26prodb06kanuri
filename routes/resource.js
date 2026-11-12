var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var park_controller = require('../controllers/park');

// API ROUTE

// GET resources base
router.get('/', api_controller.api);

// PARK ROUTES

// POST request to create a Park
router.post('/parks', park_controller.park_create_post);

// DELETE request to delete a Park
router.delete('/parks/:id', park_controller.park_delete);

// PUT request to update a Park
router.put('/parks/:id', park_controller.park_update_put);

// GET request for one Park
router.get('/parks/:id', park_controller.park_detail);

// GET request for all Parks
router.get('/parks', park_controller.park_list);

module.exports = router;
