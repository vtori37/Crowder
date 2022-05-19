const { Event } = require('../models');

let eventData = [
  {
    event_title: 'Intro to DevOps Interview Prep',
    event_summary: 'In this session, we’ll introduce you to the field of DevOps, automated software deployment, and standardization.',
    event_url: 'https://www.eventbrite.com/e/intro-to-devops-interview-prep-tickets-340315381467',
    event_start: '5/23/2022 7:00 PM CDT',
    event_end: '5/23/2022 10:00 PM CDT',
    event_image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F284662479%2F959739404503%2F1%2Foriginal.20220514-081840?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C37%2C1200%2C600&s=2fb917a51a7537537dbca9c98b212e53',
  },
  {
    event_title: 'Beyoncé Concert',
    event_summary: 'Beyoncé will be hosting a concert! Imagine that...venue to be announced.',
    event_url: 'https://www.eventbrite.com/e/beyonce-concert-tickets-340313545977',
    event_start: '5/13/2023 7:00 PM CDT',
    event_end: '5/13/2023 10:00 PM CDT',
    event_image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F284657069%2F959739404503%2F1%2Foriginal.20220514-073041?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C24%2C768%2C384&s=224751f1270e87d92fd4a5b1836346f8',
  },
  {
    event_title: 'Hacking Your Cover Letter',
    event_summary: 'This workshop is designed to help you create and modify your cover letter. You will learn the important elements of an employer-competitive',
    event_url: 'https://www.eventbrite.com/e/hacking-your-cover-letter-tickets-339651455647',
    event_start: '5/24/2022 2:30 PM CDT',
    event_end: '5/24/2022 4:00 PM CDT',
    event_image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F284656519%2F959739404503%2F1%2Foriginal.20220514-072534?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C119%2C1000%2C500&s=b73a3d1a8bf42cbe2d40c142ac85b19c',
  },
  {
    event_title: 'Salary Negotiation: Know Your Worth',
    event_summary: 'This workshop will give you tips on how to negotiate the salary you deserve. Negotiation is a skill that can be learned!',
    event_url: 'https://www.eventbrite.com/e/salary-negotiation-know-your-worth-tickets-340316234017',
    event_start: '5/23/2022 7:00 PM CDT',
    event_end: '5/23/2022 10:00 PM CDT',
    event_image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F284670669%2F959739404503%2F1%2Foriginal.20220514-084037?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1024%2C512&s=03b979b0a142cf40d9584631cb10f2fe',
  },
  {
    event_title: 'Design Patterns for JavaScript',
    event_summary: 'Learn how to define these terms, demonstrate how they are used in software development, and take a look at some practice questions.',
    event_url: 'https://www.eventbrite.com/e/design-patterns-for-javascript-tickets-340316003327',
    event_start: '5/23/2022 7:00 CDT',
    event_end: '5/23/2022 10:00 PM CDT',
    event_image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F284664319%2F959739404503%2F1%2Foriginal.20220514-083604?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=7%2C0%2C750%2C375&s=a91c42d4d76f808aa816d3501387b8e1',
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;