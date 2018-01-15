const express = require('express');
const router = express.Router();
const user = require("../schema/user.schema");
const DB = require("../db/db");
const Graph = require("../services/graph.service")
// const collection = "layers";


/**
 * if male andd female, then fevide male and female separtely
 */

router.post('/graph/', (req, res, next) => {
    let db = new DB();
    db.find("users", "", { layerId: req.body.layerId }).then(doc => {
        let deg = [4, 3, 2];
        if (!req.body.maleAndFemale) {
            let g = new Graph.Graph();
            doc.forEach(e => {
                g.addVertex(e._id, e.fname + " " + e.lname);
            });



            doc.forEach(e => {
                e.positivePrefer.forEach((pp, index) => {
                    g.addEdge(e._id, pp, deg[index]);
                })
                e.negativePrefer.forEach((np, index) => {
                    g.addEdge(e._id, np, -1 * deg[index]);
                })
            });

            res.send(g.match(req.body.groups));
        }

        else {
            let g1 = new Graph.Graph();//male
            let g2 = new Graph.Graph();//female

            doc.forEach(e => {
                if (e.gender == "male")
                    g1.addVertex(e._id, e.fname + " " + e.lname);
                else
                    g2.addVertex(e._id, e.fname + " " + e.lname);
            });



            doc.forEach(e => {
                if (e.gender == "male")
                    e.positivePrefer.forEach((pp, index) => {
                        g1.addEdge(e._id, pp, deg[index]);
                    });
                else
                    e.negativePrefer.forEach((np, index) => {
                        g2.addEdge(e._id, np, -1 * deg[index]);
                    });
            });
        
            let groups = g1.match(req.body.maleGroups)
            let groups2 = g2.match(req.body.femaleGroups)
            groups2.forEach(g=>{
                groups.push(g);
            });

            return groups;
        }
    });
});





module.exports = router;