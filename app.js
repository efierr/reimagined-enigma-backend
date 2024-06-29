const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("u got it tiger");
})








module.exports = app;