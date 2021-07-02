const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const galleryRoutes = require('./galleryRoutes');
const uploadRoutes = require('./uploadRoutes');
const blogPostRoutes = require('./blogPostsRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/galleries', galleryRoutes);
router.use('/upload', uploadRoutes);
router.use('/blogPosts', blogPostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;