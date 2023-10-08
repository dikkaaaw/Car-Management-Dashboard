const router = require("express").Router()

const carController = require("../controllers/carController")
const dashboardController = require("../controllers/dashboardController")
const upload = require("../middlewares/uploader")

router
  .route("/dashboard")
  .get(dashboardController.dashboardPage)
router
  .route("/create")
  .get(dashboardController.createCarPage)
router
  .route("/edit/:id")
  .get(dashboardController.editCarPage)

router
  .route("/cars/add")
  .post(upload.single("image"), carController.createNewCar)
router
  .route("/edit/:id")
  .post(upload.single("image"), carController.updateCar)
router.route("/delete/:id").post(carController.deleteCar)

module.exports = router
