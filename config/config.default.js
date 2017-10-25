'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508664426172_7315';

  // add your config here
  config.middleware = [];

  //添加view配置
  config.view = {
    defaultViewEngine:'nunjucks',
    mapping:{
      '.tpl': 'nunjucks',
    }
  }
  //添加XSRF验证插件
  config.exports = {
    security: {
      queryName: 'csrfToken', // 通过 query 传递 CSRF token 的默认字段为 csrfToken
      bodyName: 'csrfToken', // 通过 body 传递 CSRF token 的默认字段为 csrfToken
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };
//设置数据库基础信息
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-practice',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
  };
  return config;
};
