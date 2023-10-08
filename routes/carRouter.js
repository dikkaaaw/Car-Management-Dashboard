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

router.post(
  "/cars/add",
  upload.single("image", carController.createNewCar)
)
router.post(
  "/cars/edit/:id",
  upload.single("image", carController.updateCar)
)
router.get("/cars/delete/:id", carController.deleteCar)

module.exports = router
