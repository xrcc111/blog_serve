// 引入数据库相关
const query = require('../mysql/index')
// 引入jwt
const jwt = require('jsonwebtoken')
// 响应
const {success, miss} = require('../utils/response')
// 方法
const {convertTree} = require('../utils/help')
// 分页方法整合
const {fetchArticleNums, paging, handlePages} = require('../mysql/tree')  //分页方法整合

// 用户登录
async function login(ctx) {
    // 获取到用户信息
  const {username, password} = ctx.request.body
  const sql = `SELECT * from user_admin WHERE username = '${username}' `
  const isUser = (await query(sql)).length > 0 ? true : false
  if(!isUser) {
    ctx.body = {
      code:0,
      message:'用户不存在'
    }
  }else {
    const sql = `SELECT * from user_admin WHERE password = '${password}' `
    const result = await query(sql)
    if(result.length > 0) {
      // 将除去代码以外的结果集从返回的数据中结构出来
    const {password, ...res} = result[0]
    // 引入密钥配合jwt
   const JWT_SECERT  = 'blog'
    console.log(JWT_SECERT);
      ctx.body = {
        code:1,
        message:`欢迎回来${username}`,
        token:jwt.sign(res, JWT_SECERT , {expiresIn:'10h'}),
        expireAt: new Date(new  Date().setHours(new  Date().getHours() +  10))
      }
    }else {
      ctx.body = {
        code:0,
        message:'密码错误'
      }
    }
  }
}

// 查询所有 该方法用于前端做留言板
async function selectAll(ctx) {
  const {pageNum, pageSize} = ctx.query
  if(pageNum&&pageSize) {
   const current = (pageNum - 1) * pageSize // 获取当前起始页码
   const total = (await fetchArticleNums())[0].total //  获取文章总条数
   const result = await paging(current, pageSize)
   ctx.body = {
    code: 200,
    data:convertTree(result),
    //分页所有的参数
    ...handlePages(pageNum, pageSize, total)
    }
  }else {
   const sql = `select * from  parent`  //查询所有
   const result = await query(sql)
   success(ctx, convertTree(result))
  }
}

// 查询所有 该方法用于后管做删除查看处理
async function featchBlogMessage(ctx) {
  const {pageNum, pageSize} = ctx.query
  const isEmpty = pageNum&&pageSize
  if(!isEmpty) {
     miss(ctx,'缺少请求参数')
     return
    }
    const current = (pageNum - 1) * pageSize // 获取当前起始页码
    const total = (await fetchArticleNums())[0].total //  获取文章总条数
    const result = await paging(current, pageSize)
    ctx.body = {
     code: 200,
     data:convertTree(result),
     //分页所有的参数
     ...handlePages(pageNum, pageSize, total)
    }
}

// 新增
async function addUser (ctx) {
  const {qq, message, nickname, parentId}  = ctx.request.body
  console.log(qq, message, nickname, parentId);
  const sql = `INSERT INTO parent (qq, message, nickname, parent_id) VALUES ( '${qq}', '${message}', '${nickname}', ${parentId} )`
  const result = await query(sql)
  success(ctx,result)
}

// 删除
async function deleteUser (ctx) {
  const key = ctx.request.body
  if(!key.id) {
    miss(ctx,'id不能为空')
    return 
  }
  const sql = `delete from parent where id = ${key.id}`
  const result = await query(sql)
  success(ctx,result)
}

module.exports = {
  login,
  selectAll,
  addUser,
  deleteUser,
  featchBlogMessage
}