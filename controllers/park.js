var Park = require('../models/park');

// List of all Parks
exports.park_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Park list');
};

// Details of a specific Park
exports.park_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Park detail: ' + req.params.id);
};

// Handle Park create on POST
exports.park_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Park create POST');
};

// Handle Park delete on DELETE
exports.park_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Park delete DELETE ' + req.params.id);
};

// Handle Park update on PUT
exports.park_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Park update PUT ' + req.params.id);
};
