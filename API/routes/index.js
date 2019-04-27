var express = require('express');
var router = express.Router();
var url = express.static(__dirname + "/public/images");
var img = 'truco.jpg';
// var path_img = url + img;
// console.log(path_img);
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'API', path_img: url + img });
});

module.exports = router;
