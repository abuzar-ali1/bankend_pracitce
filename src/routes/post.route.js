import { Router } from "express";
import postSchema from "../models/posts.models";
import { registerPost } from "../controllers/post.controller";


const router = Router();

router.route('register').post(registerPost);


export default router;