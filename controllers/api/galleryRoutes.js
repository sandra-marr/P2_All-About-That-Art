const router = require('express').Router();
const session = require('express-session');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');

router.get('/gallery-painting', async (req, res) => {
    try {
      const artworkData = await Artwork.findAll({
        where: {category: 'painting'}
      });
      
      const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
      );

      res.render('gallery-details', {
        artworks
      });

    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/gallery-sculpture', async (req, res) => {
  try {
    const artworkData = await Artwork.findAll({
      where: {category: 'sculpture'}
    });

    const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
    );

    res.render('gallery-details', {
      artworks
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/gallery-photography', async (req, res) => {
  try {
    const artworkData = await Artwork.findAll({
      where: {category: 'photograph'}
    });

    const artworks = artworkData.map((artwork) =>
        artwork.get({ plain: true })
    );

    res.render('gallery-details', {
      artworks
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;