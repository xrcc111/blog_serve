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
    // 简单去重保证数据不冗余 ,后期考虑做联合查询省略此处步骤
    const sql2 = `delete p1 from client as p1,client as p2
    where p1.create_time != p2.create_time and p1.user_ip = p2.user_ip and p1.id > p2.id;`
    const res = await query(sql2)
    success(ctx, {
      message: 'ok'
    })
  }
 module.exports = {
  queryAllLength,
  getClientInfo
 }