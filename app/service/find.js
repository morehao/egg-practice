module.exports = app => {
  class Post extends app.Service {
      //新增数据
      * create(post){
          return yield this.ctx.model.Post.create(post);
      }
      //删除数据
      * delete(id){
          return yield this.ctx.model.Post.destroy({where:{id: id}});
      }
      //更新操作
      * update(id,msg){
          return yield this.ctx.model.Post.update(msg,{where:{id: id}});
      }
      //关联查询
      * find(id){
          const post = yield this.ctx.model.Post.findById(id,{
              include: [{
                  model: this.ctx.model.User,
                  as: 'user',
                  attributes: ['id','name','age'],
              }],
          });
          if(!post){
              this.ctx.throw(404,'post not found');
          }
          return post;
      };
      //单表查询
      * findSigle(id){
          const post = yield this.ctx.model.Post.findOne({where:{id: id}});
          if(!post){
              this.ctx.throw(404,'post not found');
          }
          return post;
      }
      //单表查询，查询条件为数组
      * findInArray(ids){
          const post = yield this.ctx.model.Post.findAll({where: {id: ids}});
          if(!post){
              this.ctx.throw(404,'post not found');
          }
          return post;
      }
  }
  return Post;
}
