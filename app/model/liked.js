'use strict';
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Liked = app.model.define('liked', {
        id: {
            type: STRING(120),
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        name: STRING(30),
        age: STRING(8),
    });
    return Liked;
}