const router = require('express').Router();
const Artwork = require('../../models/Artwork.js');
const { cloudinary, storage } = require('../../utils/cloudinary.js');
const multer = require('multer');
const parser = multer({storage: storage});

router.post('/', parser.single('image'), async (req, res) => {

    try { 
        const uploadArt = await cloudinary.uploader.upload(req.file.path) //cannot read property uploader of undefined.


        const newArtwork = await Artwork.create({
            description: req.body.description,
            category: req.body.category,
            user_id: req.session.user_id,
            path: req.secure_url,
            public_id: req.public_id,
        })

    res.status(200).json(newArtwork);
    } catch (err) {
        console.log(err)
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