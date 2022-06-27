// 引入数据库相关
const query = require('../mysql/index')
const {success, missId} = require('../utils/response')

// 查询所有
async function selectAll(ctx) {
  const sql = `select * from tree`
  const result = await new Promise((resolve, reject) => {
    query(sql, (err, rows) => {
      if(err) reject(err)
      resolve(rows)
    })
  })
  success(ctx,result)
}

// 新增
async function addUser (ctx) {
  const {name, age, sex}  = ctx.request.body
  const sql = `insert into user (name, age, sex) values ( ${name}, ${age}, ${sex})`
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
  success(ctx,result)
}

module.exports = {
  selectAll,
  addUser,
  deleteUser
}