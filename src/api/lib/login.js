
module.exports = function(app){
    app.post('/login',function(req,res,next){
        let sess = req.session;
        let username = req.body.username;
        let password = req.body.password;
        if(sess.count){
            sess.count++;
        }else{
            sess.count =1;
        }
        if(username == 'steven' && password == 'lishudong123'){

            //加密返回sha1加密token，过期时间未永不过期。
            //但用户离线后自动清除token。
            const crypto = require('crypto');
            const config = require('./config');
            const hash = crypto.createHash('sha1');
            const expire = Date.parse(new Date())/1000+7200;
            hash.update(username+password+config.key+expire);
            const result = {
                status: 1,
                code: '1',
                msg: 'succ',
                count: sess.count,
                token: hash.digest("hex"),
                expire: expire
            };
            sess.status = 1;
            sess.username = username;
            sess.expire = expire;
            res.setHeader("Access-Control-Allow-Origin","*");
            res.setHeader("Content-Type","application/json");
            res.json(result);
            sess.save();
        }else{
        const result = {
                status: 0,
                code: '0',
                msg: 'fail',
                count: sess.count,
                username: username
            };
            sess.status = 0;
            res.setHeader("Access-Control-Allow-Origin","*");
            res.setHeader("Content-Type","application/json");
            res.json(result);
        }
    });
}

