'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: STRING(120),
      primaryKey: true,
      allowNull: false,
    },
    name: STRING(30),
    age: INTEGER
  });

  User.prototype.associate = function() {
    app.model.User.hasMany(app.model.Post, { as: 'posts', foreignKey: 'user_id' });
  };

  return User;
};