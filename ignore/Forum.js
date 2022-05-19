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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      modeul: 'user',
      key: 'id'
    }
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'event',
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
