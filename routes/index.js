const router = require('koa-router')()
const query = require('../mysql/index')
const {success} = require('../utils/response')// 响应
// 方法
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/my', async ctx => {
  const sql = 'select * from my'
  const result = await query(sql)
  success(ctx,result)
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
