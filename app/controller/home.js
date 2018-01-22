'use strict';
const qs = require('query-string');
module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      // const posts = yield this.ctx.model.Post.findAll({
      //   attributes: [ 'id', 'user_id' ],
      //   include: { model: this.ctx.model.User, as: 'user' },
      //   where: { title: '标题' },
      //   order: [[ 'created_at', 'desc' ]]
      // });

      // this.ctx.body = posts[0].user.name;
      // this.ctx.body = 'hi, egg';
      const {
        ctx
      } = this;
      const query = ctx.request.query;
      console.log('query:', query.code);
      if (query.code) {
        console.log('1');
        //获取access_token
        const urlToken = `https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=${app.config.qqLogin.appId}&client_secret=${app.config.qqLogin.appSecret}&code=${query.code}&redirect_uri=${app.config.qqLogin.url}&state=qqlogin`;
        console.log('urlToken:', urlToken);
        const tokenRes = await app.curl(urlToken, {
          method: 'GET',
          dataType: 'text'
        });
        //字符串转对象
        const objRes = qs.parse(tokenRes.data);
        console.log("objRes:", objRes.access_token);
        //获取QQ用户openid
        const urlOpenid = `https://graph.qq.com/oauth2.0/me?access_token=${objRes.access_token}`;
        console.log('urlOpenid:', urlOpenid);
        const openidRes = await app.curl(urlOpenid, {
          method: 'GET',
          dataType: 'text'
        });
        //对返回的结果进行处理
        const dataRes = openidRes.data;
        const weizhi1 = dataRes.indexOf('{');
        const weizhi2 = dataRes.indexOf('}');
        const subRes = dataRes.substring(weizhi1 -1 ,weizhi2 + 1);
        const objOpenid = JSON.parse(subRes);
        console.log('objOpenid:',objOpenid.openid);
        const userinfoUrl = `https://graph.qq.com/user/get_user_info?access_token=${objRes.access_token}&oauth_consumer_key=${app.config.qqLogin.appId}&openid=${objOpenid.openid}`;
        const userinfoRes = await app.curl(userinfoUrl, {
          method: 'GET',
          dataType: 'json'
        });
        console.log('userinfoRes:',userinfoRes.data);
        await ctx.render('index.tpl',{
          qqUserinfo: userinfoRes.data
        })
      } else {
        console.log('2');
        await ctx.render('index.tpl',{
          qqUserinfo: ''
        });
      }
      
    };
    //新增数据
    * create(ctx) {
      const msg = {
        title: '11月',
        content: '新的一个月',
        user_id: '1'
      }
      const created = yield ctx.service.find.create(msg);
      ctx.status = 201;
      ctx.body = created;
    }
    //删除数据
    * delete(ctx) {
      const deleted = yield ctx.service.find.delete(4);
      ctx.status = 200;
      ctx.body = deleted;
    }
    //更新操作
    * update(ctx) {
      const msg = {
        title: '11月',
        content: '新的一个月就是开始',
        user_id: '1'
      }
      const updated = yield ctx.service.find.update(3, msg);
      ctx.body = updated;
    }
    //关联查询
    * findInclude(ctx) {
      ctx.body = yield ctx.service.find.find(1);
      this.ctx.body = ctx.body;
    }
    //单表查询
    * findSigle(ctx) {
      ctx.body = yield ctx.service.find.findSigle(1);
      this.ctx.body = ctx.body;
    }
    //单表查询，查询条件为数组
    * findInArray(ctx) {
      const ids = [1, 2, 3];
      ctx.body = yield ctx.service.find.findInArray(ids);
      this.ctx.body = ctx.body;
    }
  }
  return HomeController;
};