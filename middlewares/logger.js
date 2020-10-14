//middle ware 
//is a function 
function logger(req, res, next){
    console.log(req.method, req.url, res.statusCode)//http get or put or url: 
    next();
}


module.exports = logger;
