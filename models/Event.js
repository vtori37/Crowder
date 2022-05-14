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
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  event_end: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  event_image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      // image must be in URL form
      isUrl: true
    }
  },
  forum_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'forum',
      key: 'id'
    }
  }
});

module.exports = Event;