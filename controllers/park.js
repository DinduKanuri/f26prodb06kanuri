var Park = require('../models/park');

 // List of all Parks
exports.park_list = async function(req, res) {
    try {
        const theParks = await Park.find();
        res.json(theParks);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Details of a specific Park
exports.park_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Park detail: ' + req.params.id);
};


 // Handle Park create on POST
exports.park_create_post = async function(req, res) {
    console.log(req.body);

    let document = new Park();

    document.park_name = req.body.park_name;
    document.state = req.body.state;
    document.area_acres = req.body.area_acres;

    try {
        let result = await document.save();
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Handle Park delete on DELETE
exports.park_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Park delete DELETE ' + req.params.id);
};

// Handle Park update on PUT
exports.park_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Park update PUT ' + req.params.id);
};


 // VIEWS

// Handle a show all Parks page
exports.park_view_all_Page = async function(req, res) {
    try {
        const theParks = await Park.find();

        res.render('parks', {
            title: 'Parks Search Results',
            results: theParks
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
