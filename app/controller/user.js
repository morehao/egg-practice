module.exports = app => {
  class UserController extends app.Controller {
      * signup(){
          app.config.signup.enable = false;
          yield this.ctx.render('signup.tpl');
      }
      async telYanzheng(ctx){
          const body = this.ctx.request.body;
          const yanzhengma = await this.ctx.service.user.telYanzheng(body.tel,ctx);
      }
      //校验输入的短信验证码
      * msgCaptchaCheck(ctx){
          const body = this.ctx.request.body;
          const randomstr = this.ctx.session.randomstr;
          const result = yield this.ctx.service.user.msgCaptchaCheck(randomstr,body.msgCaptcha);
          this.ctx.body = result;
      }
      //密码加密，完成注册
      * finishSignup(ctx){
          const body = this.ctx.request.body;
          const result = yield this.ctx.service.user.encrypted(body.password);
      }
  }
  return UserController
}
