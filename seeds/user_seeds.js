const { User } = require('../models');
const { faker } = require('@faker-js/faker');

randomUser = () => {
  return faker.name.firstName();
}

randomEmail = () => {
  return faker.internet.email();
}

randomImg = () => {
  return faker.image.avatar();
}

userData = [
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: 'password',
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;