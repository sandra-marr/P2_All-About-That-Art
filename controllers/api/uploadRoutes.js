const router = require('express').Router();
const { Artwork , User } = require('../../models');
const { cloudinary, storage } = require('../../utils/cloudinary.js');
const multer = require('multer');
const parser = multer({storage: storage});

router.post('/', parser.single('image'), async (req, res) => {

    try { 
        const uploadArt = await cloudinary.uploader.upload(req.file.path);
    
        const newArtwork = await Artwork.create({
            description: req.body.description,
            category: req.body.category,
            user_id: req.session.user_id,
        });

        res.status(200).json({uploadArt, newArtwork});

    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;