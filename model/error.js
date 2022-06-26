class ErrorModel {
  constructor(code = 500, message="未知服务器错误", statusCode = 500) {
    this.code = code
    this.message = message
    this.statusCode = statusCode
  }

  throwErr(ctx) {
    ctx.throw(this.statusCode, this.message, {
      code:this.code,
      flag:'ErrorModel'
    })
  }
}