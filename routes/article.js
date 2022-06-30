const router = require('koa-router')()

router.prefix('/article')
const { pagingQuery } = require('../controllers/article')

router.get('/',pagingQuery)


module.exports = router