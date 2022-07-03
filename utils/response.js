// 统一处理response

// 成功
function success (ctx, data = [], message='success', code=200) {
 ctx.body =  {
   code,
   message,
   data
 }
}

// 缺少id
function miss (ctx,  message='id不能为空', code = 1003) {
  ctx.body = {
    code,
    message
  }
}

module.exports = {
  success,
  miss
}