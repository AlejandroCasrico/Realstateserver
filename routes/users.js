var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create',usercontroller.createUser)
router.post('/find',usercontroller.findUser)
router.post('/login',usercontroller.loginUser)
router.post('/update',usercontroller.UpdateUser)
router.post('/delete',usercontroller.deleteUser)
router.post('/deleteMany',usercontroller.deleteManyUsers)
module.exports = router;
