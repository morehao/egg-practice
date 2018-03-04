'use strict'
// 角色表
module.exports = app => {
  const {
    STRING,
    ENUM,
    UUIDV4
  } = app.Sequelize

  const Role = app.model.define('role', {
    id: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4
    },
    user_id: STRING(120),
    name: STRING(100), // 角色名称
    systemName: {
      type: ENUM,
      values: ['ADMIN', 'SCHOOLADMIN', 'USER']
    }, // 系统角色名称
    description: STRING(500), // 角色描述
    right: STRING(300) // 角色所属权限
  }, {
    paranoid: true // 软删除
  })
  // 类方法
  Role.checkExists = function (name) {
    const result = app.model.Role.findOne({
      where: {
        name: name
      }
    })
    return result
  }
  // 二次处理数据的实例方法
  Role.prototype.reData = function () {
    let formatObj = {}
    formatObj = {
      id: this.id,
      name: this.name,
      description: this.description,
      created_at: app.lib.formatDate(this.created_at),
      updated_at: app.lib.formatDate(this.updated_at)
    }
    return formatObj
  }
  Role.prototype.associate = function() {
    app.model.Role.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };
  return Role
}
