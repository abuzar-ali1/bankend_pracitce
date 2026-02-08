import { Router } from "express";
import { deletePost, getPosts, registerPost, updatePost } from "../controllers/post.controller.js";


const router = Router();

router.route('/register').post(registerPost);
router.route('/delete').post(deletePost);
router.route('/').get(getPosts);
router.route('/update/:id').patch(updatePost);
export default router;