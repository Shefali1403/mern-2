require("dotenv").config();
const mongoose= require('mongoose');
const URL=process.env.URL;
const connectdb= async()=>{
    try{
        mongoose.connect(URL);

    }catch(err){
        console.log(err);
        process.exit(0);
    }
}
module.exports=connectdb;