'use strict';

// had enabled by egg
// exports.static = true;
//开启nunjucks模板插件
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

// 关闭egg-mysql插件
exports.mysql = {
  enable: false,
  package: 'egg-mysql',
};


//开启egg-sequelize插件
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
//开启redis
exports.redis = {
  enable: true,
  package: 'egg-redis'
}
// 开启development插件，修改后端代码后，会自动重启 Worker 进程
exports.development = {
  enable: true,
  package: 'egg-development',
};
exports.userservice = {
  enable: true,
  package: 'egg-userservice',
};
exports.userrole = {
  package: 'egg-userrole',
};
exports.passport = {
  enable: true,
  package: 'egg-passport',
};
exports.passportQQ = {
  enable: true,
  package: 'egg-passport-qq',
};