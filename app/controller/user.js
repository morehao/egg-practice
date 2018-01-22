module.exports = app => {
    const uuidv1 = require('uuid/v1');
    class UserController extends app.Controller {
        * signup() {
            app.config.signup.enable = false;
            yield this.ctx.render('signup.tpl');
        }
        async telYanzheng(ctx) {
            const body = this.ctx.request.body;
            const yanzhengma = await this.ctx.service.user.telYanzheng(body.tel, ctx);
        }
        //校验输入的短信验证码
        * msgCaptchaCheck(ctx) {
            const body = this.ctx.request.body;
            const randomstr = this.ctx.session.randomstr;
            const result = yield this.ctx.service.user.msgCaptchaCheck(randomstr, body.msgCaptcha);
            this.ctx.body = result;
        }
        //密码加密，完成注册
        * finishSignup(ctx) {
            const body = this.ctx.request.body;
            const result = yield this.ctx.service.user.encrypted(body.password);
        }
        //添加user
        async user() {
            const {ctx} = this;
            await ctx.render('user.tpl');
        }
        async userAdd() {
            const {ctx} = this;
            const {name,age} = ctx.request.body;
            console.log('name:',name);
            const createRes = await ctx.model.User.create({
                id: uuidv1(),
                name: name,
                age: age
            });
            ctx.redirect('/user/user');
        }
        //QQ登录测试
        async login() {
            const {
                ctx
            } = this;
            await ctx.render('qqLogin.html');
        }
        //qq登录，获取code
        async getQcode() {
            const {
                ctx
            } = this;
            const urlStr = `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${app.config.qqLogin.appId}&redirect_uri=${app.config.qqLogin.url}&state=qqlogin`;
            console.log('urlStr:',urlStr);
            ctx.redirect(urlStr);
        }
        //qq登录，获取code(passport)
        async getQcodePassport() {
            const {
                ctx
            } = this;
            const urlStr = `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${app.config.qqLogin.appId}&redirect_uri=${app.config.qqLogin.url}&state=qqlogin`;
            console.log('urlStr:',urlStr);
            ctx.redirect(urlStr);
        }
        //微信登录，获取code
        async getWcode() {
            const {
                ctx
            } = this;
            const urlStr = `https://open.weixin.qq.com/connect/qrconnect?appid=${app.config.wechatLogin.appId}&redirect_uri=${app.config.wechatLogin.url}&response_type=code&scope=snsapi_login&state=wechatLogin#wechat_redirect`;
            console.log('urlStr:',urlStr);
            ctx.redirect(urlStr);
        }
    }
    return UserController
}