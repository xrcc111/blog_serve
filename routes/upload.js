const router = require('koa-router')() 
const fs = require('fs')
const path = require('path')

router.prefix('/upload')

router.get('/', ctx => {
  ctx.body = {
    code: 200,
    data: []
  }
})

router.post('/file', ctx => {
  // 上传多个文件
  const file = ctx.request.files; // 获取上传文件
  const filePath = file.type._writeStream.path
  const name = file.type.originalFilename
  const reader = fs.createReadStream(filePath);
    //获取上传文件扩展名
    console.log(path);
   
    let newFilePath = path.join(__dirname, '/upload') + `/${name}`;
    //创建可写流
    const upStream = fs.createWriteStream(newFilePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  // }
  ctx.body = {
    code: 200,
    message: 'success'
  }
})

module.exports = router