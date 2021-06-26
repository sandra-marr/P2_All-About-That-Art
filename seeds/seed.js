const sequelize = require('../config/connection');
const { User, Artwork, Category, Comment, BlogPost, Image, Recommendation } = require('../models');

const userData = require('./userData.json');
const artworkData = require('./artworkData.json');
const blogPostData = require('./blogPostData.json');
const categoryData = require('./categoryData.json');
const commentData = require('./commentData.json');
const recommendationData = require('./recommendationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const artwork = await Artwork.bulkCreate(artworkData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await BlogPost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const recommendations = await Recommendation.bulkCreate(recommendationData, {
    individualHooks: true,
    returning: true,
  });

  const images = await Image.bulkCreate(imageData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
