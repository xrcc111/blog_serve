/**
 * 一些公共接口
 */
 const query = require('../mysql/index')
 const {success, miss} = require('../utils/response')// 响应

 async function queryAllLength(ctx) {
  const articleSql = `select count(*)  as articleNum from article`
  const labelSql = `select count(*)  as labelNum from label`
  const messageSql = `select count(*)  as messageNum from parent`
  const articles = await query(articleSql)
  const labels = await query(labelSql)
  const messages = await query(messageSql)
  success(ctx, {articles:articles[0].articleNum,labels:labels[0].labelNum,messages:messages[0].messageNum})
 }

  async function getClientInfo(ctx) {
    const clientIP = ctx.request.ip;
    const user_agent = ctx.request.header['user-agent']
    const connection = ctx.request.header['Connection']
    const sql = `insert into client values (null, '${connection}', "${clientIP}", "${user_agent}", now()) `
    const result = await query(sql)
    success(ctx, {
      message: 'ok'
    })
  }
 module.exports = {
  queryAllLength,
  getClientInfo
 }