const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};

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
    unique: true,
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
      len: [4]
    }
  },
  // IF we make a profile page these model properties will come in handy 
  biography: {
    type: DataTypes.STRING(),
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING,
    allowNull: true,
    // each twitter linked must be unique if we include
    // unique: true,
    contains: 'twitter'
  },
  user_img: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true
    }
  }
},
{
  hooks: {
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 5);
      return newUserData;
    },
    async beforeUpdate(updatedUserData) {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 5);
      return updatedUserData;
    }
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
});

module.exports = User;