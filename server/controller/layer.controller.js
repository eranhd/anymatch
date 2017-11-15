//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const layer = require("../schema/layer.schema");


//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    layer.getAll((err, list) => {
        if (err)
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, lists: list }, null, 2));
        res.end();
    })

});

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
    res.send("POST");

});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;