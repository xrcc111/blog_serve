// 引入数据库相关
const query = require('../mysql/index')
const {fetchArticleNums, paging, handlePages} = require('../mysql/aritcle')  //分页方法整合
const {success, miss} = require('../utils/response')// 响应

// 文章查询所有
async function pagingQuery(ctx) {
 const {pageNum, pageSize} = ctx.query
 if(pageNum&&pageSize) {
  const current = (pageNum - 1) * pageSize // 获取当前起始页码
  const total = (await fetchArticleNums())[0].total //  获取文章总条数
  const result = await paging(current, pageSize)
  ctx.body = {
   code: 200,
   data: result,
   //分页所有的参数
   ...handlePages(pageNum, pageSize, total)
   }
 }else {
  const sql = `select id, label_name, title, cover_img,b.create_time AS create_time, b.update_time AS update_time
  from label a inner join article b on a.label_id=b.label_id;`  //查询所有
  const result = await query(sql)
  success(ctx,result)
 }
}

// 文章新增
async function addArticle(ctx) {
  const {labelId, title, coverImg, content} = ctx.request.body
  const isEmpty = (labelId && title && coverImg && content)
  if (!isEmpty) {
    miss(ctx,'请求参数缺失,请检查参数')
   return
  }
  const sql = `INSERT INTO article VALUES (null, ${labelId}, '${title}', '${coverImg}', '${content}', now(), now() )`
  const result = await query(sql)
  success(ctx,result)
}

// 文章修改
async function updateArticle(ctx) {
  const {labelId, title, coverImg, content, id} = ctx.request.body
  const isEmpty = (labelId && title && coverImg && content && id)
  if (!isEmpty) {
    miss(ctx,'请求参数缺失,请检查参数')
   return
  }
  const sql = `UPDATE article SET label_id = ${labelId}, title = '${title}', cover_img = '${coverImg}', content = '${content}', update_time = now()  WHERE id = ${id}`
  const result = await query(sql)
  success(ctx,result)
}

// 文章删除
async function deleteArticle(ctx) {
  const {id} = ctx.request.body
  if(!id) {
    miss(ctx,'id不能为空')
    return
  }
  const sql = `DELETE FROM article WHERE id = ${id}`
  const result = await query(sql)
  success(ctx,result)
}

// 文章前台查详情
async function queryOne(ctx) {
  const {id} = ctx.query
  if(!id) {
    miss(ctx,'id不能为空')
    return
  }
  const sql = `select id, label_name, title, content,b.create_time AS create_time, b.update_time AS update_time
  from label a inner join article b on a.label_id=b.label_id WHERE id = ${id}`
  const result = await query(sql)
  success(ctx,result)
}

//  后管查详情
async function queryDetail(ctx) {
  const {id} = ctx.query
  if(!id) {
    miss(ctx,'id不能为空')
    return
  }
  const sql = `select * from article WHERE id = ${id}`
  const result = await query(sql)
  success(ctx,result)
}

// 文章标题模糊搜索
async function queryArticleByTitle(ctx) {
  const {title} = ctx.query
  const sql = `select id, label_name, title, cover_img,b.create_time AS create_time, b.update_time AS update_time
  from label a inner join article b on a.label_id=b.label_id WHERE title like '%${title}%';`
  const result = await query(sql)
  success(ctx,result)
}

module.exports = {
  pagingQuery,
  addArticle,
  updateArticle,
  deleteArticle,
  queryOne,
  queryDetail,
  queryArticleByTitle
}
