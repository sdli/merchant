var app = new (require('express'))();
var bodyParser = require("body-parser");
var port = 3060;
var session = require("express-session");
var captchapng = require('captchapng');
var setResponse = require("./lib/index.js");
var cookieParser = require("cookie-parser");

app.use(cookieParser("sessiontest"));
app.use(session({
  secret: 'sessiontest',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 300000}
}));

app.use(bodyParser.urlencoded({ extended: false}));

// setResponse(app);
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
          const config = require('./lib/config');
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

app.post('/loadAuth',function(req,res,next){
  let loginStatus = (typeof req.session.status === "undefined")?false:req.session.status;
  if(loginStatus){
      let result = {
          code : '1',
          username: req.session.username,
          msg : 'login auth OK!'
      };
      res.setHeader("Access-Control-Allow-Origin","*");
      res.setHeader("Content-Type","application/json");
      res.json(result);
  }else{
    let result = {
        code : '0',
        username: "steven?",
        sess: JSON.stringify(req.session),
        msg : 'no auth!'
    };
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Content-Type","application/json");
    res.json(result);
  }
});

app.get('/img',function(req,res,next){
    var pngNum = parseInt(Math.random()*9000+1000);
    req.session.pngNum = pngNum;
    var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha 
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
    next();
});

app.listen(port,function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  API listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});