const controller = require('../controllers/controller');
const authUser = require('./../controllers/auth');
const {fieldChecks, validate} = require('./../controllers/validator');

module.exports = (router) => {
    // router.get('/', (request, response) => {
    //     response.send("<h1>Hello from Express + Nodemon</h1>")
    // });
    router.get('/',controller.getdefault);
    // router.post('/addweight', function (request, response) {
    //     let empName = request.body.empName;
    //     let empWeight = request.body.empWeight;
    //     response.end(`POST request Suceeded, we got ${empName} who weights ${empWeight}`);

    // });
    router.post('/addweight', controller.addweight);
    router.get('/aboutus', controller.aboutus);
    router.get('/getemployees', controller.getemployees);
    router.get('/getemployee/:employeeName', controller.getemployee);
    router.delete('/deletebyname',controller.deletebyname );
    router.post('/addemployee', fieldChecks(),validate,controller.addemployee);
    router.put('/updatedoc', controller.updatedoc);
    router.post('/loginuser', controller.loginuser);
    router.get('/pughome', controller.pughome);

    // router.get('/aboutus', (req, res) => {
    //     res.send("<h1>You're on the About US route</h1>");
    // });
}
