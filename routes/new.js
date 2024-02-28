const express = require("express");
const router = express.Router();

// GET show the input form
router.get("/", function (req, res, next) {
    res.render("form", {
        page_msg: "Post a Message",
    });
});

// POST incoming data from the user
router.post("/", function (req, res, next) {
    // console.log(req.body);
    const message = req.body.msg;
    const user = req.body.author;
    // messages.push({ text: messageText, user: messageUser, added: new Date() });
    // res.send("Recieved something");
    res.redirect("/");
});

module.exports = router;
