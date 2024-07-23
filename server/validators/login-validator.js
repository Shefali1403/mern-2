const z= require("zod");
const loginSchema= z.object({
    email:z
    .string({required_error:"Email not exist"}).trim()
    .min(3,{message:"Email must be atleast 3 character"})
    .max(200,{message:"Email must not be more than 200 character"}),
    password:z
    .string({required_error:"Password is invalid"}).trim()
    .min(7, {message:"Password must be atleast 7 character"})
    .max(10, {message:"Password must not be more than 10 character"}),
})
module.exports=loginSchema;