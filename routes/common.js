/**
 * 配置公共接口路由
 */
const router = require('koa-router')()
router.prefix('/common')
const { queryAllLength } = require('../controllers/common')

// 统计标签
router.get('/statistics', queryAllLength)

// 获取客户端ip
router.get('/ip', async(ctx,next) => {
      const clientIP = ctx.request.ip;
    ctx.body = `您当前的IP是： ${clientIP}`;
})

module.exports = router