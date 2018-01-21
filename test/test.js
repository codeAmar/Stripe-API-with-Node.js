const server = require('../app.js')
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Main Page Testing', function () {
    it('should validate if path `\index` route is working', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200)
                done()
            })
    })
})
