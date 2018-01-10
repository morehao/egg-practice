'use strict';
const fs = require('fs');

let readFile = function(pathname){
    return new Promise(function(resolve,reject){
        fs.readFile(pathname,function(error,data){
            if(error) reject(error);
            resolve(data);
        })
    })
}

module.exports = app => {
    class testService extends app.Service {
        async fs(pathname) {
            let bin = await readFile(pathname);
            if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
                bin = bin.slice(3);
            }
            return bin.toString('utf-8');
            
        };
        * setUtf8(bin){
            if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
                bin = bin.slice(3);
            }
            return bin.toString('utf-8');
        }
    }
    return testService
}