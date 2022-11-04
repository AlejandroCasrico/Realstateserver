var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth.controller')
/* GET home page. */
router.get('/get-jwt', authController.generateJWT);


module.exports = router;
