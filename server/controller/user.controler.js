//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");


//GET HTTP method to /bucketlist
router.get('/', (req, res) => {


});

//POST HTTP method to /bucketlist

router.post('/', (req, res, next) => {
    res.send("POST");

});

router.post("/update/", (req, res, next) => {
    console.log(req.body);
    user.update(req.body, (err, doc) => {
        if (err)
            res.json({ success: false, message: `Failed to update user. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, user: doc }, null, 2));
        res.end();
    });
});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;