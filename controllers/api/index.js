const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const galleryRoutes = require('./galleryRoutes');
const uploadRoutes = require('./uploadRoutes');
const commentRoutes = require('./commentRoutes');
const artRoutes = require('./artRoutes');
const dashboardRoutes = require('./dashboardRoutes');


router.use('/users', userRoutes);
router.use('/artist', artistRoutes);
router.use('/galleries', galleryRoutes);
router.use('/upload', uploadRoutes);
router.use('/comment', commentRoutes);
router.use('/art', artRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;