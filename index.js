const express = require("express")
const morgan = require("morgan")//logger
const session = require("express-session")
const flash = require("connect-flash")

const carRouter = require("./routes/carRouter")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use(morgan("dev"))
//to read static file
app.use(express.static(`${__dirname}/public`))
app.use(
  "/imageUploads",
  express.static(`${__dirname}/imageUploads`)
)

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
  

app.use("/cars", carRouter)

module.exports = app