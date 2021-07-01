const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const artworkData = await Artwork.findAll({
        include: [
          {
            model: User,
            attributes: ['id'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const art = artworkData.map((artwork) => artwork.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('home', { 
        art, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Artwork }],
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


  router.get('/artist/:id', async (req, res) => {
    try {
      const artistData = await User.findByPk(req.params.id);
  
      const artist = artistData.get({ plain: true });
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('artist', { artist, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

router.get('/gallery', async (req, res) => {
    try {
      const galleryData = await Artwork.findAll({
        include: [
          {
            model: Artwork,
            attributes: ['category'],
          },
        ],
      });
  
      const galleries = galleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
      // Send over the 'loggedIn' session variable to the 'gallery' template
      res.render('gallery', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/artwork/:id', async (req, res) => {
    try {
      const dbArtworkData = await Artwork.findByPk(req.params.id);
  
      const artwork = dbArtworkData.get({ plain: true });
      // Send over the 'loggedIn' session variable to the 'artwork' template
      res.render('artwork', { artwork, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/recommendations', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const recommendationsData = await Artwork.findAll({
        include: [
          {
            model: Recommendation,
            attributes : [
                'id',
                'title',
                'location',
                'type',
                'link',
            ]
          },
        ],
      });
  
      // Serialize data so the template can read it
      const recommendations = recommendationsData.map((recommendation) => recommendation.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('recommendations', { 
        recommendations, 
        logged_in: req.session.logged_in 
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

module.exports = router;