import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import mainRouter from "./routes";
import connectDB from "./db";
dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true  
}));
app.use(cookieParser())

app.use("/api",mainRouter)

app.listen(3000, () => {
    console.log("Server is running");
});