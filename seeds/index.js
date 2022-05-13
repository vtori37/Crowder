const sequelize = require('../config/connection');
const seedUsers = require('./user_seeds');
const seedPosts = require('./post_seeds');
const seedComments = require('./comment_seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED-----\n');
  await seedUsers();
  console.log('\n----- USERS SYNCED -----\n')


  process.exit(0);
}


