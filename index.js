import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import users from './routes/users.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to MongoDB")
})

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('.users', users);
    
app.listen(8800, ()=>{
    console.log(`Backend Server is running on ${PORT}`)
})

