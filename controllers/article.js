// 引入数据库相关
const query = require('../mysql/index')
const {fetchArticleNums, paging, handlePages} = require('../mysql/aritcle')  //分页方法整合
const {success, missId} = require('../utils/response')// 响应


async function pagingQuery(ctx) {
 const {pageNum, pageSize} = ctx.query
 if(pageNum&&pageSize) {
  const current = (pageNum - 1) * pageSize // 获取当前起始页码
  const total = (await fetchArticleNums())[0].total //  获取文章总条数
  const result = await paging(current, pageSize)
  console.log(total,pageNum,pageSize)
  ctx.body = {
   code: 200,
   data: result,
   //分页所有的参数
   ...handlePages(pageNum, pageSize, total)
   }
 }else {
  const sql = `select * from article`  //查询所有
  const result = await query(sql)
  success(ctx,result)
 }
}

module.exports = {pagingQuery}
