const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// eventually hash user passwords for security
const bcrypt = require('bcrypt');

class User extends Model {};

// initiate User db model
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    // username should be at least 6 characters
    validate: {
      len: [6]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // pw must be at least 6 characters
    validate: {
      len: [6]
    }
  },
  // IF we make a profile page these model properties will come in handy 
  biography: {
    type: DataTypes.STRING(1234),
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true,
    // each twitter linked must be unique
    unique: true,
    contains: 'twitter'
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
});

module.exports = User;