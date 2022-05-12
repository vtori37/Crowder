const Sequelize = require('sequelize');
require('dotenv').config()

// ternary operator for JAWS DB conditional check, if falsy instantiate a Sequelize db with MySQL
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost', // or 127.0.0.1,
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
});

// export connection
module.exports = sequelize 
