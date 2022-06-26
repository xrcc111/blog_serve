class SuccessModel {
  constructor(code, message, data) {
    this.code = code || 200 
    this.message = message || '操作成功'
    if(data) {
      this.data = data
    }
  }

  succuee(ctx) {
    ctx.body = this
  }
}
module.exports = SuccessModel