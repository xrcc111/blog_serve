/**
 * 对分页查询的sql进行函数封装，便于提取
 */
 const query = require('./index')

 //留言总数
 async function fetchArticleNums() {
   return await query(`select count(*)  as total from parent where parent_id = 0 `)
 }
 
 //分页实现
 async function paging(pageNum, pageSize) {
   return await query(`select * from (
    SELECT * from parent WHERE parent_id = 0 
    ORDER BY create_time DESC LIMIT ${pageNum}, ${pageSize}
    ) a
    UNION 
    SELECT * from parent t WHERE EXISTS (SELECT t2.id from parent t2 WHERE t2.id = t.parent_id
    ORDER BY create_time DESC limit ${pageNum}, ${pageSize});`)
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
 
 
 
 
 