const { Car } = require("../../models/index")

const createCar = async (req, res) => {
  const { name, price, category, image } = req.body
  try {
    const newCar = await Car.create({
      name,
      price,
      category,
      image,
    })

    res.status(200).json({
      status: "success",
      data: {
        newCar,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    })
  }
}

const findAllCars = async (req, res) => {
  try {
    const Cars = await Car.findAll()

    res.status(200).json({
      status: "success",
      data: {
        Cars,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    })
  }
}

const findCarById = async (req, res) => {
  const id = req.params.id
  try {
    const Cars = await Car.findOne({
      where: {
        id: req.params.id,
      },
    })

    if (!Cars) {
      return res.status(404).json({
        status: "failed",
        message: `Car with id ${id} not found!`,
      })
    }

    res.status(200).json({
      status: "success",
      message: "Data found!",
      data: {
        Cars,
      },
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    })
  }
}
const updateCar = async (req, res) => {
  const id = req.params.id
  const { name, price, category, image } = req.body
  try {
    const updateCar = await Car.update(
      {
        name,
        price,
        category,
        image,
      },
      {
        returning: true,
        where: {
          id: req.params.id,
        },
      }
    )

    if (!updateCar) {
      return res.status(404).json({
        status: "Not found!",
        message: "Data not found!",
      })
    }

    res.status(200).json({
      status: "success",
      message: "Success update data!",
      data: {
        updateCar,
      },
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      mesagge: err.message,
    })
  }
}

const deleteCar = async (req, res) => {
  const id = req.params.id
  try {
    const deleteCar = await Car.destroy({
      where: {
        id: req.params.id,
      },
    })

    if (!deleteCar) {
      return res.status(404).json({
        status: "failed",
        message: `Car with id ${id} not found!`,
      })
    }

    res.status(200).json({
      status: "success",
      message: "Success delete data!",
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      mesagge: err.message,
    })
  }
}

module.exports = {
  createCar,
  findAllCars,
  findCarById,
  updateCar,
  deleteCar,
}
