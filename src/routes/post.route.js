import { Router } from "express";
import { registerPost } from "../controllers/post.controller.js";


const router = Router();

router.route('/register').post(registerPost);


export default router;