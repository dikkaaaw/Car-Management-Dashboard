const { Car } = require("../models")
const { Op } = require("sequelize")

const dashboardPage = async (req, res) => {
  try {
    const { category, nameSearch } = req.query

    const fullUrl =
      req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl
    let cars

    const condition = {}

    if (
      category === "small" ||
      category === "medium" ||
      category === "large"
    ) {
      condition.category = category
    }

    if (nameSearch) {
      condition.name = { [Op.iLike]: `%${search}%` }
    }

    cars = await Car.findAll({
      where: condition,
    })

    res.render("index.ejs", {
      fullUrl,
      cars,
      message: req.flash("message", ""),
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const createCarPage = async (req, res) => {
  try {
    res.render("create.ejs")
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const editCarPage = async (req, res) => {
  try {
    const car = await Car.findOne({
      where: { id: req.params.id },
    })
    res.render("edit.ejs", {
      car,
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

module.exports = {
  dashboardPage,
  createCarPage,
  editCarPage,
}
