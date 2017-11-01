'use strict';

module.exports = app=>{
    class TestController extends app.Controller {

        * index(){
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
    }

    return TestController;
}