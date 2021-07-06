const Artwork = require("./Artwork");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const Image = require("./Image");
const Recommendation = require("./Recommendation");
const User = require("./User");

// Users can upload any amount of artwork
User.hasMany(Artwork, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// each artwork is owned by one user
Artwork.belongsTo(User, {
  foreignKey: "user_id",
});

// users can make as many comments as they would like
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comments are associated with one user (who created the post), and the blog or artwork that it was created for.
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// users can make as many blog posts as they would like
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// a blog post is owned by the user that created it
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

//each piece of artwork has one image
Artwork.hasOne(Image, {
  foreignKey: "art_id",
  onDelete: "CASCADE",
});

//each image is assigned to one artwork
Image.belongsTo(Artwork, {
  foreignKey: "art_id",
  onDelete: "CASCADE",
});

// a blogpost can have many comments from many users
BlogPost.hasMany(Comment, {
  foreignKey: "blog_post_id",
  onDelete: "CASCADE",
});

// artwork can have many comments from many users
Artwork.hasMany(Comment, {
  foreignKey: "art_id",
  onDelete: "CASCADE",
});

//a comment made for a piece of artwork belongs to that artwork and the user who created it.
Comment.belongsTo(Artwork, {
  foreignKey: "art_id",
});

//a comment made for a blogpost belongs to that blogpost and the user who created it.
Comment.belongsTo(BlogPost, {
  foreignKey: "blog_post_id",
});

module.exports = { Artwork, BlogPost, Comment, Recommendation, User, Image };
