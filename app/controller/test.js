'use strict';

module.exports = app=>{
    class TestController extends app.Controller {

        * index(){
            yield this.ctx.render('test.tpl');
        };
        * form(){
            const body = this.ctx.request.body;
        }
        // 通过ajax事件发起post请求，同时，头部设置csrfToken
        * ajax(ctx){
            const body = this.ctx.request.body;
            this.ctx.body = {data: 'test ajax success'};
        }

        //fs异步编程测试
        async fs(ctx){
            const pathname = './test.json';
            const result = await ctx.service.test.fs(pathname);
        }

        //middlewares post测试
        async middlewares(ctx){
            ctx.body = {
                data: true
            }
        }
    }

    return TestController;
}