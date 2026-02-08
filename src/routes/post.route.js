import { Router } from "express";
import { deletePost, registerPost } from "../controllers/post.controller.js";


const router = Router();

router.route('/register').post(registerPost);
router.route('/delete').post(deletePost);

export default router;