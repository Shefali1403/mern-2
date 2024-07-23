const mongoose=require('mongoose');
// require("dotenv").config(); 
const jwt=require("jsonwebtoken");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});
userSchema.methods.generateToken=async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
    process.env.JWTSECRET,{
        expiresIn:"30d",
    }
)
    }catch(err){
        console.error(err);
    }

}
const User= mongoose.model("User", userSchema);
module.exports=User;