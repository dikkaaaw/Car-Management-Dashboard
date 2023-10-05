const express = require("express")
const router = require('express').Router()
const carController = require('../controllers/carController')
const upload = require("../middlewares/uploadImages")

router
  .route("/")
  .get(carController.findAllCars)
  .post(carController.createCar)

router
  .route("/:id")
  .get(carController.findCarById)
  .patch(carController.updateCar)
  .delete(carController.deleteCar)

// Rute khusus untuk mengunggah gambar
router.post('/upload', upload.single('image'), (req, res) => {
  const imagePath = req.file.path
});

module.exports = router