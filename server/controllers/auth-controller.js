const User= require('../models/auth-user');
const bcrypt=require('bcryptjs');
const homeurl= async(req,res)=>{
    try{
        res.status(200).send('home page it is');

    }catch(error){
        console.log(error);
    }
}
const register= async(req,res)=>{
    try{
        const {username, email, phone, password}=req.body;
        console.log(req.body);
        const userExist= await User.findOne({email});
        if(userExist){
            return res.status(404).json({message:"user already exist"});
        }
        const saltRound=10;
        const hash_password= await bcrypt.hash(password,saltRound)
        const userCreated= await User.create({username,email,phone,password:hash_password});

        
        res.status(200).json({message:userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString()});

    }catch(error){
        console.log(error);
    }
}
const login= async(req,res)=>{
    try {
        const{email, password}= req.body;
        const userExist= await User.findOne({email});
        if(!userExist){
            res.status(400).json({message:"Invalid Credentials"});
        }
        const user= await bcrypt.compare(password, userExist.password);
        if(user){
            res.status(200).json({
                msg:"Login succesfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        }else{
            res.status(401).json({message:"Invalid username or password"});
        }
        
    } catch (error) {
        console.log("error is ", error)
    }
}
const user=async (req,res)=>{
try {
    const userData=req.user;
    return res.status(200).json({userData});
} catch (error) {
    console.log("error from the route",error);
}
}
module.exports={homeurl, register, login, user};