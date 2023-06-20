const logger = (req,res,next) =>{
    console.log("Hey I am here");
    next();
};
module.exports =logger;
