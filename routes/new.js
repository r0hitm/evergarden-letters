const express = require("express");
const router = express.Router();
const messages = require("../messages");

// GET show the input form
router.get("/", function (req, res, next) {
    res.render("form", {
        page_msg: "Write your letter",
    });
});

// POST incoming data from the user
router.post("/", function (req, res, next) {
    const message = req.body.msg;
    const user = req.body.author;
    messages.push({ text: message, user: user, added: new Date() });
    res.redirect("/");
});

module.exports = router;
