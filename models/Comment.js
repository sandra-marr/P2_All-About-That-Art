const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        },
    },
    art_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'artwork',
          key: 'id',
          },
      },
    blog_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'artwork',
          key: 'id',
          },
      }
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
