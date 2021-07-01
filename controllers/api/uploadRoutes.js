const router = require('express').Router();
const Artwork = require('../../models/Artwork.js');
const { cloudinary, storage } = require('../../utils/cloudinary.js');
const multer = require('multer');
const parser = multer({storage: storage});

router.post('/upload', parser.single('image'), async (req, res) => {

    try { 
        const uploadArtwork = await cloudinary.uploader.upload(req.file.path)
        
        const newArtwork = await Artwork.create({
            description: req.body.description,
            category: req.body.category,
            user_id: req.session.user_id,
            path: res.secure_url,
            public_id: res.public_id,
        })

    res.status(200).json(newArtwork);
    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const artworkData = await Artwork.findByPk(req.params.id, {
            include: [
                {model: User},
            ]
        });

        res.status(200).json(artworkData);
    } catch (err) {
        res.status(500).json(err);
    };
    
});

module.exports = router;