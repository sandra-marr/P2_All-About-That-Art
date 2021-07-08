const router = require('express').Router();
const session = require('express-session');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');

router.get('/matrix-painting', async (req, res) => {
    try {
      const artworkData = await Artwork.findAll({
        where: {category: 'Painting'}
      });
      
      const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
      );

      res.render('matrix', {
        artworks,
        logged_in: req.session.logged_in
      });

    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/matrix-sculpture', async (req, res) => {
  try {
    const artworkData = await Artwork.findAll({
      where: {category: 'Sculpture'}
    });

    const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
    );

    res.render('matrix', {
      artworks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/matrix-photograph', async (req, res) => {
  try {
    const artworkData = await Artwork.findAll({
      where: {category: 'Photography'}
    });

    const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
    );

    res.render('matrix', {
      artworks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;