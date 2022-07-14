const router = require('koa-router')()

router.prefix('/article')
const { pagingQuery, addArticle, updateArticle, deleteArticle } = require('../controllers/article')

// 文章列表查询
router.get('/', pagingQuery)

// 文章新增
router.post('/add', addArticle)

// 文章修改
router.post('/update', updateArticle)

// 文章删除
router.post('/delete',deleteArticle)

module.exports = router