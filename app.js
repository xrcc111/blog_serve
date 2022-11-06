const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const error = require('koa-json-error')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const{ koaBody }= require('koa-body');//  引入koaBody作为中间件实现文件上传
// 引入node的path模块
const path = require('path')
// koa-static中间件，用于访问静态文件
const static = require('koa-static')

// 引入
const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')
const label = require('./routes/label')
const links = require('./routes/links')
const weblog = require('./routes/weblog')
const common = require('./routes/common')
const upload = require('./routes/upload')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

//这里使用koaBody
app.use(
  koaBody({
    multipart: true,
    formidable: {
    maxFileSize: 200*1024*1024 // 设置上传文件大小最大限制，默认2M
    }
  })
);

// 使用koa-json-error进行错误处理
app.use(error({
  postFormat:(e, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods()) 
app.use(label.routes(), label.allowedMethods())
app.use(links.routes(), links.allowedMethods())
app.use(weblog.routes(), weblog.allowedMethods())
app.use(common.routes(), common.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// 使用中间件，利用path模块的方法拼接出静态文件目录的绝对路径
app.use(static(path.join(__dirname,'./routes/upload')))

module.exports = app
