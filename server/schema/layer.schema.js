//Require mongoose package
const mongoose = require('mongoose');

//Define SchoolSchema with title, 
const LayerSchema = mongoose.Schema({
    name: String,
    passwod: String
});

const Layer = module.exports = mongoose.model('layer', LayerSchema);
module.exports.getAll = (callback) => {
    School.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.add = (newLayer, callback) => {
    newLayer.save(callback);
}


//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteById = (id, callback) => {
    let query = { _id: id };
    Layer.remove(query, callback);
}