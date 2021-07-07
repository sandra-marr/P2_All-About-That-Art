const router = require('express').Router();
const { Artwork , User, Comment } = require('../../models');
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

    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/artwork/:id', async (req, res) => {
    try {
      const artData = await Artwork.findByPk(req.params.id, {
        include: [
            {model: User, 
            exclude: 'password'},
      
            { model: Comment, 
              attributes: [
                'comment_body',
                'comment_date',
                'art_id',
                'user_id'
              ],
              include: [
                {model: User, 
                attributes: [
                  'user_name'
                ]}
              ] 
            },
        ]
        
      });

      const art = artData.get({ plain: true });
  
      if(!artData) {
        res.status(404).json({message: "there is no artwork with that id" })
      } else {
        // res.status(200).json(art)
        res.render('artwork', { 
          art, 
          logged_in: req.session.logged_in });
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
        res.status(500).json(err);
    };
    
});

module.exports = router;