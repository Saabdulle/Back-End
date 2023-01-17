//Describes a middleware that logs any attempt to tak to the API. 
//req(uest) -> [logger (console.log key details] -> [cors] -> [auth] -> [app] -> res(ponse)

function logger(req, res, next){
    // req - the client request
    // res - the response that will be sent to the client
    // next - the next step down in the API
    // next(); passes down to the next layer (cors)

    // logging key details
    console.log(req.method, req.originalUrl);
    //pass down to the next layer
    next();
}

module.exports = logger;
