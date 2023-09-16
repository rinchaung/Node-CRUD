const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPost);
router.get('/add-post', postController.addPostForm);
router.post('/add-post', postController.addPost);
router.get('/edit-post/:id', postController.editPostForm);
router.post('/update-post/:id', postController.updatePost);
router.post('/delete-post/:id', postController.deletePost);

module.exports = router;