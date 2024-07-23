const {z}=require("zod");
// Creating a schema
const signupSchema= z.object({
    username:z
    .string({required_error:"Name is requires"}).trim()
    .min(3,{message:"Name must be of atleast 3 character"})
    .max(200,{message:"Name must not be greater than 200 character"}),
    email:z
    .string({required_error:"Email is required"}).trim()
    .email({message:"Invalid email"})
    .min(3,{message:"Email must be of atleast 3 character"})
    .max(200,{message:"Email must not be of more than 200 character"}),
    phone:z
    .string({required_error:"Phone number is required"}).trim()
    .min(10,{message:"Phone number must be atleat 10 character"})
    .max(200, {message:"Phone number must not be greater than 200 character"}),
    password:z
    .string({required_error:"Password is required"}).trim()
    .min(7, {message:"Password must be atleast 7 character"})
    .max(200, {message:"Password must not be more than 10 character"}),
});
module.exports=signupSchema;