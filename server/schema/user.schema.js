//Require mongoose package
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//Define SchoolSchema with title, 
const UserSchema = mongoose.Schema({

    username: String,
    password: String,
    schoolId: String,
    layerId: String,
    fname: String,
    lname: String,
    permission: String,
    isLogin: Boolean,
    positivePrefer: Array,
    negativePrefer: Array,
    group: Number,
    gender: String,
    lastOperation: Array
});



UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getAll = (callback) => {
    User.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.add = (newUser, callback) => {
    newUser.save(callback);
}

module.exports.update = (user, callback) => {
    let u = new User(user);
    User.findOneAndUpdate({ _id: u._id }, u, { upsert: true }, callback);
}

module.exports.addOperation = (user, operation, callback) => {
    let u = new User(user);
    User.findByIdAndUpdate(
        u.id,
        {
            $push: {
                "lastOperation": {
                    $each: [operation],
                    $position: 0,
                    $slice: 5
                }
            }
        },

        {}
    )
}

/**
 * Contact.findByIdAndUpdate(
    info._id,
    {$push: {"messages": {title: title, msg: msg}}},
    {safe: true, upsert: true},
    function(err, model) {
        console.log(err);
    }
);
 */

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteById = (id, callback) => {
    let query = { _id: id };
    User.remove(query, callback);
}

module.exports.findById = (id, callback) => {
    let query = { _id: id };
    User.find(query, callback);
}

