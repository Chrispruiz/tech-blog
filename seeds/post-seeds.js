const { Post } = require('../models');

const postData = [
    {
        title: "This is a test",
        post_content: "Tech-blog is up and running!",
        user_id: 1
    },
    {
        title: "This is also a test!",
        post_content: "Tech blog is running still!",
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;