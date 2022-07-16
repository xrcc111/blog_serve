// 引入数据库相关
const query = require('../mysql/index')
const {success, miss} = require('../utils/response')// 响应

// 新增友链
async function newFriendChain(ctx) {
  const { type, linkName, linkTag, profile, webLink } = ctx.request.body
  const isEmpty = linkName && linkTag && profile
  if(!isEmpty) {
    miss(ctx,'请求参数缺失,请检查参数')
    return
  }
  const sql = `INSERT INTO links VALUES (null, ${type}, '${linkName}','${linkTag}', '${profile}','${webLink}', now(),now())`
  const result = await query(sql)
  success(ctx, result)
}

// 查询友链
async function queryFriendChain(ctx) {
  const sql = ` SELECT * from links `
  const result = await query(sql)
  success(ctx,result)
}

// 修改友链
async function updataFriendChain(ctx) {
  const {id, type, linkName, linkTag, profile, webLink } =  ctx.request.body
  const isEmpty = linkName && linkTag && profile && id
  if(!isEmpty) {
    miss(ctx,'请求参数缺失,请检查参数')
    return
  }
  const sql = `UPDATE links SET type = ${type}, link_name = '${linkName}', link_tag = '${linkTag}', profile= '${profile}', web_link= '${webLink}' WHERE id = ${id} `
  const result = await query(sql)
  success(ctx,result)
} 

module.exports = {
  newFriendChain,
  queryFriendChain,
  updataFriendChain
}