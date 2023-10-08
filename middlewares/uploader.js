const multer = require("multer")

// Konfigurasi multer
const multerFiltering = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true)
  } else {
    return cb("Please upload an image!")
  }
}

const upload = multer({
  fileFilter: multerFiltering,
})

module.exports = upload
