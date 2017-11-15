const express = require('express');
const router = express.Router();
const school = require("../schema/school.schema");



router.get('/all/', (req, res) => {
    school.getAll((err, list) => {
        if (err)
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, lists: list }, null, 2));
        res.end();
    })

});



router.post('/create/', (req, res, next) => {
    school.add(req.body, (err, list) => {
        if (err)
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, lists: list }, null, 2));
        res.end();
    });


});


router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;