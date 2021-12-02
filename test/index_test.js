const chai = require('chai');
const cHttp = require('chai-http');
const app = require('./../index');
chai.use(cHttp);
describe('The App', function(){
  describe('GET /getemployees', function(){
    it('it should get all documents', function(done){
      chai.request(app).get('/getemployees');
      done();
    })
  });
});

