module.exports = app => {
  //数据库文件同步
  app.beforeStart(function* () {
    yield app.model.sync({
      force: false
    });
    yield app.model.Role.bulkCreate([
      {name: 'admin', systemName: 'ADMIN'},
      {name: 'schoolAdmin', systemName: 'SCHOOLADMIN'}
    ])
    yield function* () {
      const findRes = yield app.model.Role.findAll()
      // console.log('findRes:', findRes)
      console.log('findRes.length:', findRes.length)
    }
  });
  //应用级别的日志记录
  // module.exports = app => {
  //   app.logger.debug('debug info');
  //   app.logger.info('启动耗时 %d ms', Date.now() - start);
  //   app.logger.warn('warning!');
  //   app.logger.error(someErrorObj);
  // };
};