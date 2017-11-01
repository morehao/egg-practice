'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const posts = yield this.ctx.model.Post.findAll({
        attributes: [ 'id', 'user_id' ],
        include: { model: this.ctx.model.User, as: 'user' },
        where: { title: '标题' },
        order: [[ 'created_at', 'desc' ]]
      });

      this.ctx.body = posts[0].user.name;
      // this.ctx.body = 'hi, egg';
    };
    //新增数据
    * create(ctx){
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
    * delete(ctx){
      const deleted = yield ctx.service.find.delete(4);
      ctx.status = 200;
      ctx.body = deleted;
    }
    //更新操作
    * update(ctx){
      const msg = {
        title: '11月',
        content: '新的一个月就是开始',
        user_id: '1'
      }
      const updated = yield ctx.service.find.update(3,msg);
      ctx.body = updated;
    }
    //关联查询
    * findInclude(ctx){
      ctx.body = yield ctx.service.find.find(1);
      this.ctx.body = ctx.body;
    }
    //单表查询
    * findSigle(ctx){
      ctx.body = yield ctx.service.find.findSigle(1);
      this.ctx.body = ctx.body;
    }
    //单表查询，查询条件为数组
    * findInArray(ctx){
      const ids = [1,2,3];
      ctx.body = yield ctx.service.find.findInArray(ids);
      this.ctx.body =ctx.body;
    }
  }
  return HomeController;
};
