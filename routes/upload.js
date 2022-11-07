const router = require('koa-router')() 

const { uploadFile, uploadQuery } = require('../controllers/upload')

router.prefix("/upload")

router.get("/", uploadQuery )

router.post("/file", uploadFile)

module.exports = router