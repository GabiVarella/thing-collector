var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/sodas", function (req, res, next) {
  res.render("sodas");
});
router.get('/ocean', function(req, res) {
  res.render('ocean');
})

module.exports = router;
