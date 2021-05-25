const { Router } = require('express');
const router = Router();
const { conn } = require('../db.js');
const {
	postAgregar,
	allPosts,
	deletePost,
	editPost,
} = require("../controllers/posts.controller");
   
router.get("/posts", allPosts);
router.post('/addPost', postAgregar);
router.put('/editPost/:id', editPost);
router.delete('/deletePost/:id', deletePost);



module.exports = router;