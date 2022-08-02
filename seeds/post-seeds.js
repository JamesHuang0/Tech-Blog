const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "AMD will overtake Intel one day",
    content: "Can't beat that price!",
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData, { individualHooks: true });

module.exports = seedPosts;