const z=require('zod');
const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
        
    } catch (err) {
        // console.log(err); 
        const status=400;
        const message="Fill the details properly";
        const extraDetail= err.errors[0].message; 
        const error={
            status,
            message,
            extraDetail
        }
        next(error);
        
    }
};
module.exports=validate;