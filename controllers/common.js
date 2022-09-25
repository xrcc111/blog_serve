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
 module.exports = {
  queryAllLength
 }