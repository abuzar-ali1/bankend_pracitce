import { Router } from "express";
import { userLogin, userRegister , userLogout } from "../controllers/user.controller.js";

const router = Router();
router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
router.route("/logout").post(userLogout);




export default router;