var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
    res.send("hello world");
});

module.exports = router;
