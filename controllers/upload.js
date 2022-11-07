const fs = require('fs')
const path = require('path')
const query = require('../mysql/index')
const {success} = require('../utils/response')// 响应

async function uploadQuery(ctx) {
  const {id} = ctx.query
  const sql = `SELECT path, create_time from upload WHERE id = ${id}`
  const result = await query(sql);
  success(ctx,result)
}

async function uploadFile(ctx) {
  const file = ctx.request.files; // 获取上传文件
  const filePath = file.type._writeStream.path
  const name = file.type.originalFilename
  const reader = fs.createReadStream(filePath);
    //获取上传文件扩展名   
    let newFilePath = path.join(__dirname, '../public/upload') + `/${name}`;
    // 把图片的路径入库
    const value = `upload/${name}`
    const sql = `INSERT INTO upload VALUES (NULL, '${value}', now()) `
    const result = await query(sql)
    //创建可写流
    const upStream = fs.createWriteStream(newFilePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  ctx.body = {
    code: 200,
    message: '文件上传成功',
    data: result,
  }
}

module.exports = {
  uploadQuery,
  uploadFile
}