// 引入数据库相关
const query = require('../mysql/index')


async function getUsers(ctx) {
  const sql = `select * from `
  const result = await new Promise((resolve, reject) => {
    query(sql, (err, rows) => {
      if(err) reject(err)
      resolve(rows)
    })
  })
}

async function addUsers (ctx) {
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

module.exports = {
  getUsers,
  addUsers
}