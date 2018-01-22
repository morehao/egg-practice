'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post = app.model.define('post', {
    id: {
      type:  STRING(120),
      primaryKey: true,
    },
    title: STRING(30),
    content: STRING(255),
    user_id: STRING(120),
    created_at: DATE,
    updated_at: DATE,
  });

  Post.associate = function() {
    app.model.Post.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Post;
};