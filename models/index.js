const Artwork = require('./Artwork');
const BlogPost = require('./BlogPost');
const Category = require('./Category');
const Comment = require('./Comment');
const Image = require('./Image');
const Recommendation = require('./Recommendation');
const User = require('./User');

User.hasMany(Artwork, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Artwork.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

Artwork.hasOne(Category, {
  foreignKey: 'category_id',
});

Category.belongsTo(Artwork, {
  foreignKey: 'category_id',
});

Artwork.hasOne(Image, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE'
});

Image.belongsTo(Artwork, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blog_post_id',
  onDelete: 'CASCADE'
});

Artwork.hasMany(Comment, {
  foreignKey: art_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Artwork, {
    foreignKey: art_id',
});

Comment.belongsTo(BlogPost, {
    foreignKey: blog_post_id',
});
  
module.exports = { Artwork, BlogPost, Category, Comment, Recommendation, User, Image };