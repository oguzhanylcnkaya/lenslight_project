import express from 'express';
import * as userContreller from "../controllers/userController.js";
import * as authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router();
router.route("/register").post(userContreller.createUser)
router.route("/login").post(userContreller.login)
router.route("/dashboard").get(authMiddleware.authenticateToken ,userContreller.getDashboardPage)

export default router