import PhotoModel from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    try {
        const photo = await PhotoModel.create(req.body);
        res.status(201).json({
            succeded: true,
            photo,
            message : "The photo was created successfully!"
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
        // res.status(200).json({
        //     succeded: true,
        //     photos,
        //     message : "The photo was listed successfully!"
        // })
        res.status(200).render("photos", {
            photos,
            link : "photos"
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }

}

const deletePhoto = async (req, res) => {
    try {
        await PhotoModel.findByIdAndDelete(req.body.id);
        res.status(200).json({
            succeded: true,
            message : "The photo was deleted successfully!"
        })

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const updatePhoto = async (req,res) => {
    try {
        await PhotoModel.findByIdAndUpdate(req.body.id, req.body);
        res.status(200).json({
            succeded: true,
            message : "The photo was updated successfully!"
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getPhotoByID = async (req, res) => {
    try {
        const photo = await PhotoModel.findById(req.params.id)
        res.status(200).render("photo", {
            photo,
            link : "photos"
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

export { createPhoto, listPhotos, deletePhoto, updatePhoto, getPhotoByID }