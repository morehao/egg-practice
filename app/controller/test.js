'use strict';

module.exports = app=>{
    class TestController extends app.Controller {

        * index(){
            yield this.ctx.render('test.tpl');
        };

        * ajax(ctx){
            console.log('post ajax');
            const body = this.ctx.request.body;
            console.log('body:',body);
            this.ctx.body = {data: 'test ajax success'};
        }
    }

    return TestController;
}