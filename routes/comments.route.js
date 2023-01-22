const { Router } = require('express');
const { commentController } = require('../controllers/comments.controller');


const router  = Router();


router.post('/comms', commentController.addComment);
router.get('/comms', commentController.getCoomms);
router.delete('/comms', commentController.deleteCommsById);
router.get('/comms/cats/:categoryId', commentController.getCommsByNewsCats);

module.exports = router;