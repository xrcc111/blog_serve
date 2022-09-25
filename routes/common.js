/**
 * 配置公共接口路由
 */
const router = require('koa-router')()
router.prefix('/common')
const { queryAllLength } = require('../controllers/common')


router.get('/statistics', queryAllLength)

module.exports = router