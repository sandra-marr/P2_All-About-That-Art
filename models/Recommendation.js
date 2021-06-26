const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recommendation extends Model {}

Recommendation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    type: {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recommendation',
  }
);

module.exports = Recommendation;
