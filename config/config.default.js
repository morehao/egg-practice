'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508664426172_7315';

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = ['test', 'gzip'];

  //配置gzip中间件的配置
  config.gzip = {
    threshold: 1024, //小于1k的响应不压缩
  };

  //添加view配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    }
  }
  //添加XSRF验证插件
  // config.exports = {
  //   security: {
  //     queryName: 'csrfToken', // 通过 query 传递 CSRF token 的默认字段为 csrfToken
  //     bodyName: 'csrfToken', // 通过 body 传递 CSRF token 的默认字段为 csrfToken
  //     useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
  //     cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
  //     sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
  //   },
  // };

  //关闭csrf验证
  config.security = {
    csrf: {
      enable: false
    }
  }
  //设置数据库基础信息
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-practice',
    // host: 'localhost',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'root',
    logging: false
  };
  exports.passportQQ = {
    key: '101436492',
    secret: '69c1f07d759b24cb1c50600',
  };
  // 配置redis
  config.redis = { //redis 簇
    clients: {
      // 自定义客户端
      session: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: 0
      },

      user: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: 1
      },

      interaction: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: 2
      },

      test: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: 3
      }

    }
  };
  config.userservice = {
    service: {
      async getUser(ctx) {
        // const {ctx} = this;
        const user = await ctx.model.User.findAll
        // Retrieve your user data from cookie, redis, db, whatever
        // For common web applications using cookie, you may get session id with ctx.cookies
      },
  
      getUserId(ctx) {
        // The way to get userId
        // eg. return ctx.user && ctx.user.userId
      }
    }
  }
  return config;
};