const express = require("express")
const morgan = require("morgan") //logger
const session = require("express-session")
const flash = require("connect-flash")
const bodyParser = require("body-parser")

const carRouter = require("./routes/carRouter")
const carsRouter = require("./routes/api/carsRouter")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan("dev"))
//to read static file
app.use(express.static(`${__dirname}/public`))

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

//notification using flash and express-session
app.use(
  session({
    secret: "test",
    saveUninitialized: true,
    resave: true,
  })
)
app.use(flash())

app.use("/", carRouter)
app.use("/cars", carsRouter)

module.exports = app
