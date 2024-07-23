const express= require('express');
const cors=require("cors");
const authrouter=require('./router/auth-router');
const contactrouter= require('./router/contact-router');
const connectdb=require('./utils/db');
const errorMiddleware = require('./middlewares/errror-middleware');
const app= express();
const serviceroute= require('./router/service-router');
const corsOptions={
    origin:'http://localhost:5173',
    methods:'GET, POST, PUT, PATCH, DELETE',
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json())
//connection
connectdb().then(()=>console.log("mongodb succesfully connected")).catch((err)=>console.log("error it is",err));
// routes
app.use('/api/auth', authrouter);
app.use('/api/form', contactrouter);
app.use('/api/data', serviceroute);
app.use(errorMiddleware); 
const PORT=8000;
app.listen(PORT, ()=>console.log(`server is running on ${PORT}`));