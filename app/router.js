'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  //test.js
  app.get('/test','test.index');
  app.get('/test/form','test.form');
  app.post('/test/ajax','test.ajax');
  app.get('/findInclude','home.findInclude');
  app.get('/findSigle','home.findSigle');
  app.get('/create','home.create');
  app.get('/delete','home.delete');
  app.get('/findInArray','home.findInArray');
  app.get('/update','home.update');
  //用户注册
  app.get('/user/signup','user.signup');
  app.post('/user/telYanzheng','user.telYanzheng');
  app.post('/user/msgCaptcha','user.msgCaptchaCheck');
  app.post('/user/finishSignup','user.finishSignup');
};
