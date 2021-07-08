const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

//profile is intended to be an interface for viewers to look at an artist bio and their artwork
router.get('/profile/:id', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Artwork }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', { user, logged_in: req.session.logged_in });
    //   res.status(200).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
});

module.exports = router;