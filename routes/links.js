const router = require('koa-router')()

const { newFriendChain, queryFriendChain, updataFriendChain } = require('../controllers/links')
/**
 * 友链部分路由
 */

// 设置前缀
router.prefix('/links')

// 获取友链
router.get('/',queryFriendChain)

// 新增友链
router.post('/add', newFriendChain)

// 修改友链
router.post('/update', updataFriendChain)

module.exports = router