const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

// update bio 
router.put('/updateBio/:id', withAuth, async (req,res) => {
  try {

    const userBio = await User.bio.update(
      {
        bio: req.body.bio,
      },
      );

      res.status(200).json(userBio);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;