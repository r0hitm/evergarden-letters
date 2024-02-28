const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

// GET home page
router.get("/", function (req, res, next) {
    console.log("GET / request. [index.js]");
    res.render("index", {
        messages,
        page_msg: "Read Previously Posted messages",
    });
});

module.exports = router;
