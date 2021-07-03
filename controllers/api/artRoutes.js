const router = require('express').Router();
const { Artwork , User } = require('../../models');
const { cloudinary, storage } = require('../../utils/cloudinary.js');

router.put('/update', async (req, res) => {
    try { 
        const newArtwork = await Artwork.update(
            {
                description: req.body.newArtwork.description,
                category: req.body.newArtwork.category,
                user_id: req.body.newArtwork.user_id,
                public_id: req.body.uploadArt.public_id,
                path: req.body.uploadArt.secure_url,
            },
            { where: {
                id: req.body.newArtwork.id,
              }
            });

        res.status(200).json(newArtwork);
        console.log(res)

    } catch (err) {
        console.log(err)
    res.status(500).json(err);
    }
});

router.get('/artwork/:id', async (req, res) => {
    try {
      const artworkData = await Artwork.findByPk(req.params.id, {
        include: [
            {model: User, 
            exclude: 'password'},
        ]
    });
  
      if(!artworkData) {
        res.status(404).json({message: "there is no artwork with that id" })
      } else {
        // res.status(200).json(artworkData);
        res.render('artwork', { 
          artworkData, 
          loggedIn: req.session.loggedIn });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//req should send the artwork id and the artwork public_id
router.delete('/delete/:id', async (req, res) => {
    try {

        const removeArt = await cloudinary.uploader.destroy({where: {public_id: req.body.publid_id}}); 

        const deleteArtData = await Artwork.destroy({where: {id: req.params.id}});

        res.status(200).json({ removeArt, deleteArtData});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
    
});

module.exports = router;