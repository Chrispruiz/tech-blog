const { User } = require('../models');

const userData = [
    {
        username: "chris_ruiz",
        email: "chrisprudiz@att.net",
        password: "password123"
    },
    {
        username: "jeff_ruiz",
        email: "jeff_r@gmail.com",
        password: "password456"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;