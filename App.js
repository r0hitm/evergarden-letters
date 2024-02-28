const express = require("express");
// const pug = require("pug"); // does NOT required, loaded by express by default internally
const logger = require("morgan");
const favicon = require("serve-favicon");
const path = require("path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();
const PORT = 3000;

// *** Middlewares ***
app.use(logger("dev"));
app.use(express.json()); // these two populate the req.body w/ the form
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, "public", "favicon.png"))); // todo

// *** Template engine setup ***
app.set("views", "./views"); // this is default but I want to be explicit here for learning's sake
app.set("view engine", "pug");

// *** Routes ***
app.use("/", indexRouter);
app.use("/new", newRouter);

// *** Kick start the listening ***
app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV);
    console.log(`Listening on port ${PORT}`);
});
