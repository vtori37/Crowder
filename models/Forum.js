const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Forum extends Model {};

// initiatize Forum db model
Forum.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  forum_title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      contains: 'Forum'
    }
  },
  forum_posts: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'forum',
      key: 'id'
    }
  },
  forum_comments: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'comment',
      key: 'id'
    }
  }
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'forum'
});

module.exports = Forum;
