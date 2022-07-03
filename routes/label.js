/**
 * 标签增删改查 路由
 */
 const router = require('koa-router')()
// 设置前缀
router.prefix('/label')
// 拿到controllers的方法
const { selectLabel, addLabel, updateLabel, deleteLabel} = require('../controllers/label')

// 查询
router.get('/',selectLabel)

// 新增
router.post('/add',addLabel)

// 修改
router.post('/update',updateLabel)

// 删除
router.post('/delete',deleteLabel)


module.exports = router

