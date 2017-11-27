const node_xj = require("xls-to-json");
const fs = require("fs");

module.exports.convert = (path, pathToSave) => {
    return new Promise((res, rej) => {
        node_xj({
            input: path,  // input xls 
            // output: __dirname + '/test.json', // output json 
            output: pathToSave
        }, (err, result) => {
            console.log("in convert");
            if (err) {
                console.error("in convert" + err);
                res(rej);
            } else {
                console.log("in convert" + JSON.stringify(result));
                res(result);
            }
        });
    })

}
