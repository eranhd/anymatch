const express = require("express");
const fileUpload = require('express-fileupload');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('./server/config/passport')(passport); // pass passport for configuration

const app = express();
//Middleware for CORS
app.use(fileUpload());

let useControler = () => {
    const school = require("./server/controller/school.controler");
    const layer = require("./server/controller/layer.controller");
    const student = require("./server/controller/student.controler");
    const user = require("./server/controller/user.controler");
    const clas = require("./server/controller/class.controler");

    app.use("/school", school);
    app.use("/layer", layer);
    app.use("/student", student);
    app.use("/user", user);
    app.use("/class", clas);


};

app.use(cors());


app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = require("./server/config/database");
mongoose.connect(config.database + "anymatch");

useControler();


// process the signup form
app.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            return next(err); // will generate a 500 error
        }
        if (!user) {
            return res.send({ success: false, message: 'authentication failed' });
        }
        req.login(user, loginErr => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.send({ success: true, user: user, message: 'authentication succeeded' });
        });
    })(req, res, next);

});

app.post('/login', (req, res, next) => {

    passport.authenticate('local-login', (err, user, info) => {
        if (err) {
            return next(err); // will generate a 500 error
        }
        if (!user) {
            console.log(info);
            return res.send({ success: false, code: 1, message: 'authentication failed' });
        }
        req.login(user, (err) => {
            if (err) {
                return res.send({ success: false, code: 2, message: 'authentication failed' });
            }
            return res.send({ success: true, message: 'authentication succeeded', user: user });
        });
    })(req, res, next);

});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    return res.send("logout")
});

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// const DIST_FOLDER = path.join(process.cwd(), 'dist');
// console.log(DIST_FOLDER)

// app.get('*', (req, res) => {
//     res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
// });


app.listen(3000, () => { console.log("listen to 3000") });



