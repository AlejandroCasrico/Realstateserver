var express = require('express');
var router = express.Router();
const housecontroller = require('../controllers/house.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/createProperty',housecontroller.createHouse)
router.get('/findProperty',housecontroller.findHouse)
router.post('/updateProperty',housecontroller.UpdateHouse)
module.exports = router;
