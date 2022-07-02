const router = require('koa-router')()

// 引入逻辑层代码
const { selectAll, addUser, deleteUser, login} = require('../controllers/users')

// 设置前缀
router.prefix('/users')



// 查询所有
router.get('/', selectAll)

// 新增数据
router.post('/add', addUser)

// 删除数据
router.post('/delete',deleteUser)

// 后台登录
router.post('/login', login)

module.exports = router
