import express from "express";
import { createPost, getAllPost } from '../controllers/postController.js'

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPost);
// router.get('/:id', getPost);
// router.put('/:id', updatePost);
// router.delete('/:id', updatePost);

export default router;