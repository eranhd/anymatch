const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const DB = require("../db/db");
const Graph = require("../services/graph.service")
// const collection = "layers";


router.post('/graph/', (req, res, next) => {
    let db = new DB();
    db.find("users", "", { layerId: req.body.layerId }).then(doc => {
        let g = new Graph.Graph();
        doc.forEach(e => {
            g.addVertex(e._id, e.fname + " " + e.lname);
        });

        let deg = [4,3,2], negDeg= [0.15, 0.3, 0.5];

        doc.forEach(e => {
            e.positivePrefer.forEach((pp, index) => {
                g.addEdge(e._id, pp, deg[index]);
            })
            e.negativePrefer.forEach((np, index) => {
                g.addEdge(e._id, np, -1 * deg[index] );
            })
        });

        res.send(g.match(req.body.groups));
    });
});





module.exports = router;