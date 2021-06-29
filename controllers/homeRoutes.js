const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../models');
const withAuth = require('../utils/auth');



router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // include: [{ model: Artwork }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the profile page. 
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});