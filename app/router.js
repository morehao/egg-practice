'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  //test.js
  app.get('/test','test.index');
  app.post('/test/ajax','test.ajax');
};
