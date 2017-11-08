'use strict';
const sms = require('ali-sms');
const SMSClient = require('@alicloud/sms-sdk');
const crypto = require('crypto');


const accessKeyID = process.env.ALI_SMS_ACCESSKEYID;
const accessKeySecret = process.env.ALI_SMS_ACCESSKEYSECRET;


module.exports = app => {
    //加密所需key值
    const key = app.config.encrypt.cryptKey;
    class userService extends app.Service {
        //获取短信验证码
        async telYanzheng(tel,ctx) {
            console.log('tel:', tel);
            //生成随机验证码
            var range = function (start, end) {
                var array = [];
                for (var i = start; i < end; ++i) array.push(i);
                return array;
            };
            var randomstr = range(0, 6).map(function (x) {
                return Math.floor(Math.random() * 10);
            }).join('');

            //开始执行短信发送代码
            const accessKeyId = accessKeyID;
            const secretAccessKey = accessKeySecret;
            //初始化sms_client
            let smsClient = new SMSClient({
                accessKeyId,
                secretAccessKey
            })
            //发送短信
            smsClient.sendSMS({
                PhoneNumbers: tel,
                recNum: tel,
                SignName: '瀚图影像',
                TemplateCode: 'SMS_77470056',
                TemplateParam: `{"number":${randomstr},"product":"云通信"}`
            }).then(function (res) {
                let {Code} = res
                if (Code === 'OK') {
                    //处理返回参数
                    console.log('res:',res);
                }
            }, function (err) {
                console.log('err',err);
            })
            console.log('end');
            ctx.session.randomstr = randomstr;
            return randomstr;
        };
        //校验输入的短信验证码
        * msgCaptchaCheck(randomstr,msgCaptcha){
            if(randomstr == msgCaptcha){
                return true;
            }else{
                return false;
            }
        };
        //密码加密
        * encrypted(password){
            console.log('password:',password);
            console.log('key:',key);
            let cipher = crypto.createCipher('bf',key);
            let newPsd = "";
            newPsd += cipher.update(password,"utf8","hex");
            newPsd += cipher.final("hex");
            return newPsd;
        };
        //密码解密
        * decrypted(password){
            console.log('password:',password);
            let decipher = crypto.createDecipher("bf",key);
            let oldPsd = "";
            oldPsd += decipher.update(password,"hex","utf8");
            oldPsd += decipher.final("utf8");
            return oldPsd;
        }
    }
    return userService
}