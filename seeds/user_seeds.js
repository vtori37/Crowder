const { User } = require('../models');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt')

randomUser = () => {
  return faker.name.firstName();
}

randomEmail = () => {
  return faker.internet.email();
}

randomImg = () => {
  return faker.image.avatar();
}

randomPw = async (pw) => {
  pw = await bcrypt.hash(pw, 10);
  return pw;
}

userData = [
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `${randomPw('password')}`,
    biography: ``,
    twitter: ``,
    user_img: `${randomImg()}`
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;