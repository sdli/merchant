
module.exports = {
    saveSession:function(req){
        let sess = req.session;
        sess.username = req.body.username;
        sess.password = req.body.password;
    },
    getUserSession: function(req){
        return !!req.session.username&&!!req.session.password?{
            username: req.session.username,
            password: req.session.password
        }:false;
    },
    refreshToken: function(req,userInfo){
        const crypto = require('crypto');
        const config = require('./config');
        const hash = crypto.createHash('sha1');
        const timeStamp = Date.parse(new Date());
        req.session.expire = timeStamp/1000 + 7200;
        hash.update(username+password+config.key+expire);
        return hash.digest("hex");
    }
};