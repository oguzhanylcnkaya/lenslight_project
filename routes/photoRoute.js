import express from 'express';
import * as photoContreller from "../controllers/photoContreller.js";

const router = express.Router();
router.route("/add").post(photoContreller.createPhoto)
router.route("/").get(photoContreller.listPhotos)
router.route("/delete").delete(photoContreller.deletePhoto)
router.route("/update").put(photoContreller.updatePhoto)

router.route("/:id").get(photoContreller.getPhotoByID)

export default router