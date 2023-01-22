const { Router } = require('express');
const { newsController } = require('../controllers/news.controller');


const router = Router();

router.post('/news', newsController.addNews);
router.patch('/news/:id', newsController.changeNews);
router.get('/news', newsController.getNews);
router.delete('/news/:id', newsController.deleteNewsById);
router.get('/news/:id', newsController.getNewsById);
router.get('/news/cats/:categoryId', newsController.getNewsByCats);

module.exports = router