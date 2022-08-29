import express from 'express';
import * as userContreller from "../controllers/userController.js";

const router = express.Router();
router.route("/register").post(userContreller.createUser)
// router.route("/").get(photoContreller.listPhotos)
// router.route("/delete").delete(photoContreller.deletePhoto)
// router.route("/update").put(photoContreller.updatePhoto)

export default router