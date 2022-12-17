const router = require('koa-router')()

router.prefix('/article')
const { pagingQuery, addArticle, updateArticle, deleteArticle, queryOne, queryDetail, queryArticleByTitle, getArticleById } = require('../controllers/article')

// 文章列表查询
router.get('/', pagingQuery)

// 文章新增
router.post('/add', addArticle)

// 文章修改
router.post('/update', updateArticle)

// 文章删除
router.post('/delete',deleteArticle)

// 单个文章详情
router.get('/query', queryOne)

// 后管文章详情查询
router.get('/detail', queryDetail)

// 模糊搜索查询文章标题
router.get('/queryTitle', queryArticleByTitle)

// 通过标签查询文章 
router.get('/getById', getArticleById)

module.exports = router