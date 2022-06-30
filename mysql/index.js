const mysql = require('mysql')

// 创建数据库连接池
const pool = mysql.createPool({
  port:'3306',
  database:'blog',
  user:'root',
  password:'123abcde'
})

// 定义一个方法操作数据库导出
module.exports =  function query(sql, values) {
  return new Promise((resolve,reject) => {
    pool.getConnection((err,connection) => {
      if(err) {
        reject(err)
      }else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else{
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
