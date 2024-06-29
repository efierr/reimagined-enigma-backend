const express = require("express");

const router = express.Router()


const workouts = require("../models/workouts");



router.get("/", (req,res) => {
    res.status(200).send(workouts)
});

router.get("/:id", (req, res) => {
    const {id} = req.params
    const workout = workouts.find((ele) => ele.id === +id)

    if (workout) {
        res.status(200).send(workout)
    } else {
        res.status(404).json({error: "help is on the way"})
    }
})

router.post("/", (req, res) => {
    const newWorkout = { ...req.body, id: workouts.length + 1 };
    workouts.push(newWorkout);
    res.json(workouts[workouts.length -1]);
  });

module.exports = router;