import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import signupRouter from './routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.mongo)
.then(()=>{console.log("ConnectedSuccessfully")})
.catch((err)=> {console.log(err)});
const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server is listening");
})

app.use('/api/user', userRouter);
app.use('/api/auth', signupRouter);