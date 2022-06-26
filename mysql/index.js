const mysql = require('mysql')

// 创建数据库连接池
const pool = mysql.createPool({
  port:'3306',
  database:'blog',
  user:'root',
  password:'123abcde'
})

// 定义一个方法操作数据库导出
module.exports =  function query(sql, callback) {
  pool.getConnection((err, connection) => {
    connection.query(sql,(err, rows) => {
      callback(err,rows)
      connection.release() // 断开连接
    })
  })
}
