var express = require("express");
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');

router.get("/sodas", function (req, res, next) {
  res.render("sodas");
});
router.get('/ocean', function(req, res) {
  res.render('ocean');
})

router.get('/pokemon', function(req, res) {
  res.render('pokemon')
});

router.get('/transformers', function(req, res) {
  res.render('transformers')
})

router.get('/bikes', function(req, res) {
  res.render('bikes');
})

module.exports = router;
