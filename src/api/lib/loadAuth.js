module.exports = function(app){
    app.post('/loadAuth',function(){
        let loginStatus = (typeof req.session.status === "undefined")?false:req.session.status;
        if(loginStatus){
            let result = {
                code : '1',
                username: req.session.username,
                msg : 'login auth OK!'
            };
            res.json(result);
        }else{
            let result = {
                code : '0',
                msg : 'no auth!'
            };
            res.json(result);
        }
    });
}