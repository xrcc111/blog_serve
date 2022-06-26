// 统一处理response

// 成功
async function success (ctx, data = [], message='success', code=200) {
 ctx.body =  {
   code,
   message,
   data
 }
  console.log(ctx);
}

// 失败
function error (ctx, data = [],  message='error', code = 1) {
  ctx.body = {
    code,
    message,
    data
  }
}

module.exports = {
  success,
  error
}