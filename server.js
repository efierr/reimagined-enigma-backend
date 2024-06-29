const app = require("./app")

require("dotenv").config()


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`your tuning in on 18.5${PORT}`)
})