var express = require('express');
var router = express.Router();
const housecontroller = require('../controllers/house.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/createProperty',housecontroller.createHouse)
router.post('/findProperty',housecontroller.findHouse)
router.post('/updateProperty',housecontroller.UpdateHouse)
router.post('/deleteProperty',housecontroller.deleteHouse)
router.post('/removeProperty',housecontroller.RemoveHouses)
router.post('/delcertainProperty',housecontroller.DeleteCertainHouses)
router.post('/findFav',housecontroller.findFavorite)
router.post('/deleteFav',housecontroller.deleteFav)
module.exports = router;
