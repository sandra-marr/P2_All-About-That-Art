const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

// update bio 
router.put('/updateInfo/', withAuth, async (req,res) => {
  try {
    const userData = await User.update(
        {
          bio: req.body.bio,
          emai: req.body.email,
          linkedin: req.body.linkedin,
          instagram: req.body.instagram,
          facebook: req.body.facebook,
          twitter: req.body.twitter,
          isArtist: req.body.isArtist,
        },
        {
        where: {
          id: req.session.user_id,
        }});


    res.status(200).json(userData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;