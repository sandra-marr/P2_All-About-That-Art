const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

// update bio 
router.put('/updateBio/', withAuth, async (req,res) => {
  try {

    console.log(req.body)
    const userData = await User.update(
        {
          bio: req.body.bio
        },
        {
        where: {
          id: req.session.user_id,
        }});


    res.status(200).json(userData);
    console.log(userData)

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;