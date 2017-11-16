const express = require('express');
const router = express.Router();
const school = require("../schema/school.schema");
const DB = require("../db/db");



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

router.post("/getById/", (req, res, next) => {
    school.findById(req.body, (err, list) => {
        if (err)
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        else
            res.write(JSON.stringify({ success: true, school: list }, null, 2));
        res.end();
    });
});

router.post("/update/", (req, res, next) => {
    // console.log(req.session);
    let db = new DB("test", "school");
    db.save({ "test": "test" }).then(resolve=>{
        res.send(resolve);
    });
    
});


router.delete('/:id', (req, res, next) => {
    res.send("DELETE");

})

module.exports = router;