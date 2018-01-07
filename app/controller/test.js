'use strict';

module.exports = app=>{
    class TestController extends app.Controller {

        * index(){
            console.log('env:',app.config.env);
            yield this.ctx.render('test.tpl');
        };
        * form(){
            const body = this.ctx.request.body;
            console.log('body:',body);
        }
        // 通过ajax事件发起post请求，同时，头部设置csrfToken
        * ajax(ctx){
            console.log('post ajax');
            const body = this.ctx.request.body;
            console.log('body:',body);
            this.ctx.body = {data: 'test ajax success'};
        }

        //fs异步编程测试
        async fs(ctx){
            console.log('fs');
            const pathname = './test.json';
            const result = await ctx.service.test.fs(pathname);
            console.log('service end');
            console.log('result:',result);
        }

        //middlewares post测试
        async middlewares(ctx){
            console.log('middlewares post');
            ctx.body = {
                data: true
            }
        }
    }

    return TestController;
}