const router = require('express').Router();
const Artwork = require('../../models/Artwork.js');
const { cloudinary, storage } = require('../../utils/cloudinary');
const multer = require('multer');
const parser = multer({storage: storage});

router.post('/', parser.single('image'), async (req, res) => {

    try { 
        const uploadArt = await cloudinary.uploader.upload(req.file.path)

        // const newArtwork = await Artwork.create({
        //     description: req.body.description,
        //     category: req.body.category,
        //     user_id: req.session.user_id,
        //     path: uploadArt.secure_url,
        //     public_id: uploadArt.public_id,
        // })

        res.status(200).json(uploadArt.secure_url, uploadArt.public_id);
        console.log(res)

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