'use strict';

const Service = require('egg').Service;

class RedisService extends Service {
    //存入redis,三个参数分别为实例名称、key值、属性名称、存入的值、过期时间
    async setRedis(instanceName, keyName, value, expiredTime) {
        const {
            ctx
        } = this;

        const result = await ctx.app.redis.get(instanceName).set(keyName, JSON.stringify({
            data: value
        }), 'PX', expiredTime);
        return result;
    }
    //读取redis，三个参数分别为实例名称、key值、属性名称
    async getRedis(instanceName, keyName) {
        const {
            ctx
        } = this;
        const stringRes = await ctx.app.redis.get(instanceName).get(keyName);
        // console.log("stringRes:",stringRes);
        if (stringRes == null) {
            return stringRes;
        } else {
            const result = JSON.parse(stringRes).data;
            return result;

        }
    }

    //根据token，读取相应的redis
    async tokenRedis() {
        const {
            ctx
        } = this;
        const stringRes = await ctx.app.redis.get(instanceName).get(keyName);
        const redisRes = JSON.parse(stringRes).data;
        //判断redis中缓存的token是否存在，如果存在再判断是否过期
        if (redisRes.token) {
            if (token == redisRes) {
                return redisRes;
            } else {
                return 0
            }
        } else {
            return 0
        }
    }

}

module.exports = RedisService;