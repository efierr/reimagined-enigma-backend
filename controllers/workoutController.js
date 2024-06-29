const express = require("express");

const router = express.Router()


const workouts = require("../models/workouts");



router.get("/", (req,res) => {
    res.status(200).send(workouts)
});



module.exports = router;