const router = require('koa-router')()
const query = require('../mysql/index')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async ctx => {
  const sql = `select * from parent a left join son b on a.parent_id=b.parent_id`
  const result = await query(sql)
  ctx.body = {
    data:result
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
