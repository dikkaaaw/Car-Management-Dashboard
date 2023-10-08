const { Car } = require("../models")
const imagekit = require("../lib/imagekit")

const createNewCar = async (req, res) => {
  const { name, price, category } = req.body
  const file = req.file

  const split = file.originalname.split(".")
  const extension = split[split.length - 1]

  const img = await imagekit.upload({
    file: file.buffer,
    fileName: `IMG-${Date.now()}.${extension}`,
  })

  try {
    await Car.create({
      name,
      price,
      category,
      image: img.url,
    })

    req.flash("message", "Data berhasil ditambahkan!")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const updateCar = async (req, res) => {
  const { name, price, category } = req.body
  const file = req.file

  const split = file.originalname.split(".")
  const extension = split[split.length - 1]

  const img = await imagekit.upload({
    file: file.buffer,
    fileName: `IMG-${Date.now()}.${extension}`,
  })

  try {
    const id = req.params.id
    await Car.update(
      {
        name,
        price,
        category,
        image: img.url,
      },
      {
        where: {
          id,
        },
      }
    )
    req.flash("message", "Data berhasil diupdate!")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(404).json({
      status: "failed",
      mesagge: err.message,
    })
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = req.params.id
    await Car.destroy({
      where: {
        id,
      },
    })
    req.flash("message", "Data berhasil dihapus!")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(404).json({
      status: "failed",
      mesagge: err.message,
    })
  }
}

module.exports = {
  createNewCar,
  updateCar,
  deleteCar,
}
