const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reaction extends Model {};

// initialize Reaction db model
Reaction.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'post',
      key: 'id'
    }
  },
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'comment',
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  }
},
{ 
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'reaction'
});

module.exports = Reaction;