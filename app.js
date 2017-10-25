module.exports = app => {
    app.beforeStart(function* () {
      console.log('1');
      yield app.model.sync({force: false});
      console.log('2');
    });
  };