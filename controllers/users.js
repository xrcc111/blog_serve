// 引入数据库相关
const query = require('../mysql/index')
const {success, missId} = require('../utils/response')
const {convertTree} = require('../utils/help')

// 查询所有
async function selectAll(ctx) {
  const sql = `select * from tree`
  const result = await new Promise((resolve, reject) => {
    query(sql, (err, rows) => {
      if(err) reject(err)
      resolve(rows)
    })
  })
  success(ctx, convertTree(result))
}

// 新增
async function addUser (ctx) {
  const {qq, message, nickname, parentId}  = ctx.request.body
  console.log(qq, message, nickname, parentId);
  const sql = `INSERT INTO tree (qq, message, nickname, parent_id) VALUES ( ${qq}, '${message}', '${nickname}', ${parentId} )`
  const result = await new Promise( (resolve, reject) => {
    query(sql, (err, rows) => {
      if (err) reject(err)
      resolve(rows)
    })
  })
  ctx.body = result
}

// 删除
async function deleteUser (ctx) {
  const key = ctx.request.body
  if(!key.id) {
    missId(ctx)
    return 
  }
  const sql = `delete from tree where id = ${key.id}`
  const result = await new Promise( (resolve, reject) => {
    query(sql, (err, rows) => {
      if(err) reject (err)
      resolve(rows)
    })
  })
  // 
  success(ctx,result)
}

module.exports = {
  selectAll,
  addUser,
  deleteUser
}