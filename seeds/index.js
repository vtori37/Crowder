const sequelize = require('../config/connection');
const seedUsers = require('./user_seeds');
const seedPosts = require('./post_seeds');
const seedComments = require('./comment_seeds');
// const seedForums = require('./forum_seeds');
const seedEvents = require('./event_seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED-----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');
  // await seedForums();
  // console.log('\n----- FORUMS SEEDED -----\n')
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
  
  console.log('\n----- CROWDER INITIALIZED -----\n');
  process.exit(0);
}

seedAll();

