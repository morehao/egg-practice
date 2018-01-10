'use strict';
const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
    return async function gzip(ctx, next) {
        await next();

        //后续中间件执行完成后将响应体转换成gzip
        let body = ctx.body;
        if (!body) return;

        //支持options.threshold
        if(options.threshold && ctx.length < options.threshold) return;

        if (isJSON(body)) body = JSON.stringify(body);

        //设置gzip body，修正响应头
        const stream = zlib.createGzip();
        stream.end(body);
        ctx.body = stream;
        ctx.set('Content-Encoding', 'gzip');
    }
}