const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const galleryRoutes = require('./galleryRoutes');


router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/galleries', galleryRoutes);

module.exports = router;