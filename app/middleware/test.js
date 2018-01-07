'use strict';
module.exports = options =>{
    return async function test(ctx,next){
        console.log('test middlewares');
        await next();
        console.log('ctx:',ctx.request.url);
        if(ctx.request.url == '/test/middlewares'){
            console.log('true');
            ctx.body = {
                data: false
            };
            // ctx.redirect('/test');

        }else{
            console.log('false');
        }
        
    }
}