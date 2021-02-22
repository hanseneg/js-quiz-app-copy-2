const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

mongoose.connect("mongodb://localhost:27017/jsQuizApp",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch(error => console.log(error))

app.use(express.json())
app.use(morgan("dev"))

app.listen(9000, () => {
    console.log("Running on Port 9000")
})