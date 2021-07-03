const router = require('express').Router();
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;