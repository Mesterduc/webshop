const multer = require('multer')
const fs =  require('fs')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const { name } = req.body
      const path = `../public/uploads/${name}`
      fs.mkdirSync(path, { recursive: true })
      return cb(null, path)
	},
	filename: (req, file, cb) => {
		return cb(null, file.originalname)
	}

})

const upload = multer({
	storage: storage
})

exports.upload = upload;