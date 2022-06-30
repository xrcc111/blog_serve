/**
 * 对分页查询的sql进行函数封装，便于提取
 */
const query = require('./index')

//文章总数
async function fetchArticleNums() {
  return await query(`select count(*)  as total from article`)
}

//分页实现
async function paging(pageNum, pageSize) {
  return await query(`SELECT * from article ORDER BY id DESC LIMIT ${pageNum}, ${pageSize}`)
}

// 分页公共函数
function handlePages (pageNum, pageSize, total) {
  let startRow = total > 0 ? ((pageNum - 1) * pageSize + 1) : 0;
  let endRow = pageNum * pageSize <= total ? pageNum * pageSize : total;
  return {
      pageNum,
      pageSize,
      total,
      startRow,
      endRow
  }
}

module.exports = {
  fetchArticleNums,
  paging,
  handlePages
}




