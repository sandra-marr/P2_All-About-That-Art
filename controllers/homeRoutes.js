const router = require("express").Router();
const {
  Artwork,
  BlogPost,
  Comment,
  Recommendation,
  User,
  Image,
} = require("../models");
const { sequelize } = require("../models/Artwork");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const artworkData = await Artwork.findOne({
      order: sequelize.random(), //currently pulling a random piece of artwork to feature. GOAL is to pull highest ranked artwork to feature.
      include: [{ model: User, attributes: ["user_name"] }],
    });

    // Serialize data so the template can read it
    const art = artworkData.get({ plain: true });

    // Pass serialized data and session flag into template
    res.render("home", {
      art,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/artist", async (req, res) => {
  try {
    const artistData = await User.findAll({
      where: {
        isArtist: true,
      },
    });

    const artists = artistData.map((artist) => artist.get({ plain: true }));

    res.render("artists", {
      artists,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/gallery", async (req, res) => {
  try {
    const paintingData = await Artwork.findOne({
      where: { category: "painting" },
      order: sequelize.random(),
    });
    ``;
    const sculptureData = await Artwork.findOne({
      where: { category: "sculpture" },
      order: sequelize.random(),
    });

    const photographyData = await Artwork.findOne({
      where: { category: "photograph" },
      order: sequelize.random(),
    });

    const paintings = paintingData.get({ plain: true });

    const sculptures = sculptureData.get({ plain: true });

    const photographs = photographyData.get({ plain: true });

    res.render("gallery", {
      paintings,
      sculptures,
      photographs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//dashboard is intended to be the user interface for updating their bio or uploading artwork. This should come up after logging in.
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Artwork }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in,
      
    });
  console.log(user)
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/recommendations", async (req, res) => {
  try {
    const recommendationsData = await Recommendation.findAll({});

    // Serialize data so the template can read it
    const recommendations = recommendationsData.map((recommendation) =>
      recommendation.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("recommendations", {
      recommendation: recommendations,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the profile page.
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.render("dashboard", { logged_in: req.session.logged_in });
  } else {
    res.render("signup", { logged_in: req.session.logged_in });
  }
});

module.exports = router;


