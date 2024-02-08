const cors = require("cors")
const mongoose = require("mongoose")
const express = require("express")

const patientRouter = require("./controllers/patientRouters")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://newuser:123abc321@cluster0.nrowaeg.mongodb.net/PatientDb?retryWrites=true&w=majority", { useNewUrlParser: true })

app.use("/api/patients", patientRouter)


app.listen(1011, () => {
    console.log("\n Server Running")
})