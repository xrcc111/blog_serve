const router = require('koa-router')()

// 引入逻辑层代码
// const { getUsers, addUsers} = require('../controllers/users')
const query = require('../mysql/index')

const {success, error} = require('../utils/response')

// 设置前缀
router.prefix('/users')

// 查询所有
router.get('/', async function (ctx, next) {
  const sql = `select * from user`
  const result = await new Promise((resolve, reject) => {
    query(sql, (err, rows) => {
      if(err) reject(err)
      resolve(rows)
    })
  })
  ctx.body = result
})

// 新增数据
router.post('/add', function (ctx, next) {
  addUsers(ctx)
})

module.exports = router
