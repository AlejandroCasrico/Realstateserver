var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth.controller')
const basicAuth = require('express-basic-auth')
/* GET home page. */
router.get('/get-jwt',basicAuth({
    users: { 'admin': 'supersecret' }
}), authController.generateJWT);


module.exports = router;
