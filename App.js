const express = require("express");
const pug = require("pug");
const logger = require("morgan");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
const PORT = 3000;

// Middlewares
app.use(logger("dev"));
// error handler middleware is used only in development mode
if (process.env.NODE_ENV === "development") {
    const errorhandler = require("errorhandler");
    app.use(errorhandler());
}
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) // todo

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(process.env.NODE_ENV);
    console.log(`Example app listening on port ${PORT}`);
});
