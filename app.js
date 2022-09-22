const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const error = require('koa-json-error')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const cors = require('koa2-cors')

// 引入
const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')
const label = require('./routes/label')
const links = require('./routes/links')
const weblog = require('./routes/weblog')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// 允许跨域
// app.use(
//   cors({
//     origin: function (ctx) { //设置允许来自指定域名请求
//         // if (ctx.url === '/api/list') {
//         //     return '*'; // /api/list接口所有域名都可以请求
//         // }
//         return 'http://backstage.xrblogs.cn/'; //只允许这个域名的请求
//     },
//     maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//     credentials: true, //是否允许发送Cookie
//     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
// })
// )

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

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
