const express = require("express");

const app = express();
app.use(express.json);
app.get("/", (req, res) => {
    res.send("u got it tiger");
})


const workoutsController = require("./controllers/workoutController");
app.use("/workouts", workoutsController)





module.exports = app;