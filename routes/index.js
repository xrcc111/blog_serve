const router = require('koa-router')()
const query = require('../mysql/index')
// 方法
const {convertTree} = require('../utils/help')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async ctx => {
  const sql = `select * from (
    SELECT * from parent WHERE parent_id = 0 
    ORDER BY create_time DESC LIMIT 0, 10
    ) a
    UNION 
    SELECT * from parent t WHERE EXISTS (SELECT t2.id from parent t2 WHERE t2.id = t.parent_id
    ORDER BY create_time DESC limit 0, 10);`
  const result = await query(sql)
  ctx.body = {
    data:convertTree(result)
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
