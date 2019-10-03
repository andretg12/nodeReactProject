process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
chai.should();



describe('/GET:id product', () => {
    it('it should GET a product by the given ID', (done) => {
        chai.request("http://localhost:4000/api")
            .get('/products/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
describe('/GET contact', () => {
    it('it should GET all of the contacts', (done) => {
        chai.request("http://localhost:4000/api")
            .get('/contacts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
describe('/POST user', () => {
    it('it should POST a contact on the user endpoint', (done) => {
        let contact = {
            name: "Whatever",
            email: "idk@gmail.com",
            message: "Whatever.idk@gmail.com is my real email"
        }
        chai.request("http://localhost:4000/api")
            .post('/user')
            .send(contact)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object")
                done();
            });
    });
});

describe('/GET products', () => {
    it('it should GET an array with all the products', (done) => {
        chai.request("http://localhost:4000/api")
            .get('/products')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});