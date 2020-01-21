var express = require('express');
var router = express.Router();
const params = require('../config/params');


var url = '';
var   server = "http://localhost:" + params.port;

router.get('/',  (req, res) => {

  res.render("index");

});



module.exports = router;