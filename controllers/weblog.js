// 引入数据库相关
const query = require('../mysql/index')
const { fetchTotals, paging, handlePages } = require('../mysql/weblog')
const {success, miss} = require('../utils/response')// 响应

// 新增日志
async function addWebLog(ctx) {
  const { log }  = ctx.request.body
  if(!log) {
    miss(ctx,'请求参数缺失,请检查参数')
    return
  }
  const sql = `INSERT INTO weblog VALUES(null,'${log}',now(), now())`
  const result = await query(sql)
  success(ctx,result)
}

// 查询日志
async function queryWebLog(ctx) {
  const {pageNum, pageSize} = ctx.query
  if(pageNum&&pageSize) {
   const current = (pageNum - 1) * pageSize // 获取当前起始页码
   const total = (await fetchTotals())[0].total //  获取文章总条数
   const result = await paging(current, pageSize)
   ctx.body = {
    code: 200,
    data: result,
    //分页所有的参数
    ...handlePages(pageNum, pageSize, total)
    }
  }else {
   const sql = `select id, log, create_time FROM weblog ORDER BY create_time DESC `  //查询所有
   const result = await query(sql)
   success(ctx,result)
  }
}

// 修改日志
async function updateWebLog(ctx) {
  const {id, log} = ctx.request.body
  const isEmpty = id && log
  if(!isEmpty) {
    miss(ctx,'请求参数缺失,请检查参数')
    return
  }
  const sql = `UPDATE weblog SET log = '${log}', update_time = now() WHERE id = ${id} `
  const result = await query(sql)
  success(ctx,result)
}

// 删除日志
async function removeWebLog(ctx) {
  const { id } =  ctx.request.body
  if(!id) {
    miss(ctx,'id不能为空')
    return    
  }
  const sql = `DELETE FROM weblog WHERE id =${id}`
  const result = await query(sql)
  success(ctx, result)
}

module.exports = {
  addWebLog,
  queryWebLog,
  updateWebLog,
  removeWebLog
}