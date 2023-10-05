const router = require("express").Router()
const carRoutes = require("./carRouter")

router.use("/cars", carRoutes)

module.exports = router;