'use strict';
module.exports = options =>{
    return async function test(ctx,next){
        await next();
        if(ctx.request.url == '/test/middlewares'){
            ctx.body = {
                data: false
            };
            // ctx.redirect('/test');

        }else{
        }
        
    }
}