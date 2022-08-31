import express from 'express';
import * as pageController from "../controllers/pageController.js";
// import * as authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router();
// router.route("/").get(authMiddleware.authenticateToken ,pageController.getIndexPage)
router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/blog").get(pageController.getBlogPage)
router.route("/contact").get(pageController.getContactPage)
//router.route("/gallery").get(pageController.getGalleryPage)
router.route("/projects").get(pageController.getProjectsPage)
router.route("/services").get(pageController.getServicesPage)
router.route("/register").get(pageController.getRegisterPage)
router.route("/login").get(pageController.getLoginPage)

export default router