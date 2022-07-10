/**
 * 标签的增删改查
 */
// 引入数据库相关
const query = require('../mysql/index')
const {success, miss} = require('../utils/response')// 响应

// 查询
async function selectLabel(ctx) {
  const sql = `select * from label `
  const result = await query(sql)
  success(ctx,result)
}

// 新增
async function addLabel(ctx) {
  const { labelName } = ctx.request.body
  console.log(ctx.request.body,labelName);
  if (!labelName) {
    miss(ctx,'标签不能为空')
   return
  }
  const sql = `INSERT INTO label VALUES (null, '${labelName}',now() )`
  const result = await query(sql)
  success(ctx,result)
}

// 修改
async function updateLabel(ctx) {
  const {id, labelName} = ctx.request.body
  if(!id||!labelName) {
    miss(ctx,'id或者标签不能为空')
    return
  }
  const sql = `UPDATE label SET label_name='${labelName}' WHERE label_id = ${id};`
  const result = await query(sql)
  success(ctx,result)
}

// 删除
async function deleteLabel(ctx) {
  const {id} = ctx.request.body
  if(!id) {
    miss(ctx,'id不能为空')
    return
  }
  const sql = `DELETE FROM label WHERE label_id =${id};`
  const result = query(sql)
  success(ctx,result)
}

module.exports = {
  selectLabel,
  addLabel,
  updateLabel,
  deleteLabel
}