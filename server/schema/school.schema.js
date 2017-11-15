//Require mongoose package
const mongoose = require('mongoose');

//Define SchoolSchema with title, 
const SchoolSchema = mongoose.Schema({
    name: String,
    email: String,
    layersId: String,
    usersId: String
});

const School = module.exports = mongoose.model('School', SchoolSchema);
module.exports.getAll = (callback) => {
    School.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.add = (newSchool, callback) => {
    console.log(newSchool)
    let item = new School(newSchool);
    item.save(callback);
}


//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteById = (id, callback) => {
    let query = {_id: id};
    School.remove(query, callback);
}