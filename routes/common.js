/**
 * 配置公共接口路由
 */
const router = require('koa-router')()
router.prefix('/common')
const { queryAllLength, getClientInfo } = require('../controllers/common')

// 统计标签
router.get('/statistics', queryAllLength)

// 获取客户端ip
router.get('/ip', getClientInfo)

module.exports = router