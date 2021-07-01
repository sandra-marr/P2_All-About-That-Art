const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const galleryRoutes = require('./galleryRoutes');
const uploadRoutes = require('./uploadRoutes');


router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/galleries', galleryRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;