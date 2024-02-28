const express = require("express");
const router = express.Router();
const messages = require("../messages");

// GET home page
router.get("/", function (req, res, next) {
    res.render("index", {
        messages,
        page_msg: "Read Previously Posted messages",
    });
});

module.exports = router;
