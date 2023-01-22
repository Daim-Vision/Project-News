const { Router } = require('express');
const { catsController } = require('../controllers/categories.controller');


const router = Router();

router.post('/cats', catsController.addCategory);
router.get('/cats', catsController.getAllCats);
router.delete('/cats', catsController.deleteCatsById);

module.exports = router