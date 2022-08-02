const { Comment } = require("../models");

const commentData = [
  {
    id: 1,
    comment_text: "I like AMD too.",
    user_id: 1,
    post_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;