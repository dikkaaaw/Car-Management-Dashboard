const express = require("express")
const router = require("express").Router()
const carsController = require("../../controllers/api/carsController")

router
  .route("/")
  .get(carsController.findAllCars)
  .post(carsController.createCar)

router
  .route("/:id")
  .get(carsController.findCarById)
  .patch(carsController.updateCar)
  .delete(carsController.deleteCar)

module.exports = router
