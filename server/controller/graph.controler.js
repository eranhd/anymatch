const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const DB = require("../db/db");
const Graph = require("../services/graph.service")
// const collection = "layers";


router.post('/graph/', (req, res, next) => {
    let db = new DB();
    db.find("users", { layerId: req.body.layerId }).then(doc => {
        let g = new Graph.Graph();
        doc.forEach(e => {
            g.addVertex(e._id, e.fname + " " + e.lname);
        });

        doc.forEach(e => {
            e.positivePrefer.forEach((pp, index) => {
                g.addEdge(e._id, pp, e.positivePrefer.length - index);
            })
            e.negativePrefer.forEach((np, index) => {
                g.addEdge(e._id, np, -1 * (e.negativePrefer.length - index));
            })
        });
        res.send(g.dfs());
    });
});



module.exports = router;