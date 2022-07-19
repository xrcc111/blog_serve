/* 网站日志部分内容*/
const router = require('koa-router')()
const { addWebLog, queryWebLog, updateWebLog, removeWebLog } = require('../controllers/weblog')

// 设置前缀
router.prefix('/weblog')

// 查询
router.get('/',queryWebLog)

// 新增
router.post('/add', addWebLog)

// 修改
router.post('/update', updateWebLog)

// 删除
router.post('/delete', removeWebLog)

module.exports = router
