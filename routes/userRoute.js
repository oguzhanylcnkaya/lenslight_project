import express from 'express';
import * as userContreller from "../controllers/userController.js";

const router = express.Router();
router.route("/register").post(userContreller.createUser)
router.route("/login").post(userContreller.login)

export default router