import PhotoModel from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    try {
        const photo = await PhotoModel.create(req.body);
        res.status(201).json({
            succeded: true,
            photo
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const listPhotos = async (req, res) => {
    try {
        const photos = await PhotoModel.find();
        res.status(200).json({
            succeded: true,
            photos
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }

}

export { createPhoto, listPhotos }