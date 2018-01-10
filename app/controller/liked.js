'use strict';
const Controller = require('egg').Controller;
const uuidv1 = require('uuid/v1');

class LikedController extends Controller{

    //渲染页面
    async index() {
        const {ctx} = this;
        await ctx.render('liked.html');
    }
    //将数据存入redis
    async redisSave() {
        const {ctx} = this;
        const array = [{name: 'morehao',age: 24},{name: 'test',age: 25}];
        const result = await ctx.service.redis.setRedis('user','userInfo',array,10 * 1000);
        ctx.body = result;
    }
    //将数据从redis中取出
    async redisGet() {
        const {ctx} = this;
        const result = await ctx.service.redis.getRedis('user','userInfo');
        ctx.body = result;
    }
    //录入姓名年龄
    async insert() {
        const {ctx} = this;
        const body = ctx.request.body;
        const info = {
            id: uuidv1(),
            name: body.name,
            age: body.age
        };
        console.log('info:',info);
        const redisRes = await ctx.service.redis.getRedis('interaction','liked');
        console.log('redisRes:',redisRes);
        if(redisRes){
            console.log(1);
            const redisFind = await ctx.service.redis.getRedis('interaction','liked');
            console.log('redisFind:',redisFind);
        }else{//redis中相关数据为空
            console.log('2');
            const array = [];
            array.unshift(info);
            console.log('array:',array);
            const redisSave = await ctx.service.redis.setRedis('interaction','liked',array,600 * 1000);
            console.log('redisSave:',redisSave);
        }
    }
};

module.exports = LikedController;