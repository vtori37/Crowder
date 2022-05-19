const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {};

// initialize Event db model
Event.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  event_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_summary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  event_start: {
    type: DataTypes.STRING,
    allowNull: false
  },
  event_end: {
    type: DataTypes.STRING,
    allowNull: false
  },
  event_image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      // image must be in URL form
      isUrl: true
    }
  },
  event_code: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  }
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  tableName: 'event'
});

module.exports = Event;