const { User } = require('../models');
const { faker } = require('@faker-js/faker');

randomUser = () => {
  return faker.name.userName();
}

randomEmail = () => {
  return faker.internet.email();
}

userData = [
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `password`,
    biography: ``,
    twitter: ``
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;