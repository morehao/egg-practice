module.exports = app => {
  class UserController extends app.Controller {
      * signup(){
          console.log('signup');
          console.log('config:',app.config.signup.enable);
          app.config.signup.enable = false;
          console.log('config:',app.config.signup.enable);
          yield this.ctx.render('signup.tpl');
      }
      async telYanzheng(ctx){
          const body = this.ctx.request.body;
          console.log('body:',body);
          const yanzhengma = await this.ctx.service.user.telYanzheng(body.tel,ctx);
          console.log('session:',this.ctx.session);
      }
      //校验输入的短信验证码
      * msgCaptchaCheck(ctx){
          const body = this.ctx.request.body;
          console.log('body:',body);
          const randomstr = this.ctx.session.randomstr;
          const result = yield this.ctx.service.user.msgCaptchaCheck(randomstr,body.msgCaptcha);
          console.log('result:',result);
          this.ctx.body = result;
      }
      //密码加密，完成注册
      * finishSignup(ctx){
          const body = this.ctx.request.body;
          console.log('body:',body);
          const result = yield this.ctx.service.user.encrypted(body.password);
          console.log('result:',result);
      }
  }
  return UserController
}
