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
  return config;
};
