const router = require('express').Router();
const { Artwork , User } = require('../../models');
const { cloudinary, storage } = require('../../utils/cloudinary.js');
const multer = require('multer');
const parser = multer({storage: storage});

router.post('/', parser.single('image'), async (req, res) => {

    try { 
        const uploadArt = await cloudinary.uploader.upload(req.file.path);
    
        const newArtwork = await Artwork.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            user_id: req.session.user_id,
            path: uploadArt.secure_url,
            public_id: uploadArt.public_id,
        });

        const artData = newArtwork.get({plain:true})

        // res.status(200).json(artData)
        res.render('artworkUpload',
        {artData, logged_in: req.session.logged_in});
     
        console.log(newArtwork)

    } catch (err) {
    console.log(err)
    res.status(500).json(err);
    }
});

module.exports = router;