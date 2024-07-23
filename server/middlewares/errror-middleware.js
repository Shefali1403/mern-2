const errorMiddleware= (err,req,res,next)=>{
    const status=err.status || 500;
    const message= err.message || "Backend Server Error";
    const extraDetail= err.extraDetail || "Backend Error";
    return res.status(status).json({message,extraDetail});
}
module.exports=errorMiddleware;