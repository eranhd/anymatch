let chai = require("chai")
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

describe('defult get', function () {
    it('request should return status 200', (done) => {
        chai.request("http://localhost:3000")
            .get('')
            .end((err, res) => {
                // expect(res.status).to.equal(200);
                if (err)
                    done(err)
                else {
                    res.should.have.status(200);
                    done()
                }
            });
    });
});

describe('post all users', function () {
    it('request for all user without auth should return status 401', (done) => {
        chai.request("http://localhost:3000/user/all")
            .post('')
            .end((err, res) => {
                // expect(res.status).to.equal(200);
                if (err)
                    done(err)
                else {
                    // res.body.success
                    res.should.have.status(401);
                    done()
                }
            });
    });
    it('login should return status 200', (done) => {
        chai.request("http://localhost:3000/login")
            .post("")
            .send({ username: "203514633", password: "1" })
            .then((err, res) => {
                // console.log(res.body)
                if (err)
                    done(err)
                else {
                    res.should.have.status(200);
                    done()
                }
            });

    });

    it('request for all user', (done) => {
        chai.request("http://localhost:3000/login")
            .post("")
            .send({ username: "203514633", password: "1" })
            .then((err, res) => {
                // console.log(res.body)
                if (err)
                    done(err)
                else {
                    res.should.have.status(200);
                    done()
                }
            });

    });

});