import express from 'express';
import * as photoContreller from "../controllers/photoContreller.js";

const router = express.Router();
router.route("/add").post(photoContreller.createPhoto)
router.route("/list").get(photoContreller.listPhotos)

export default router