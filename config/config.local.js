'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * @member Config#system
   * @property {String} KEY - description
   */
  config.encrypt = {
    cryptKey: "eggPractice"
  };
  config.signup = {
    signup: true
  }
  config.qqLogin = {
    appId: '123',
    appSecret: '12',
    // url: 'http://127.0.0.1:7001'
    url: 'http%3a%2f%2f127.0.0.1%3a7001'
  }
  config.wechatLogin = {
    appId:'12',
    appSecret: '12',
    // url: 'http://127.0.0.1:7001'
    url: '1231'
  }
  return config;
};
