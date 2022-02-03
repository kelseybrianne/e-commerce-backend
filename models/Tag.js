const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    product_id: {
      type: DataTypes.INTEGER,
      // References the Product model's id

    },
    tag_id: {
      type: DataTypes.INTEGER,
      // References the Tag model's id

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;