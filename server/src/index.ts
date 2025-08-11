import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import mainRouter from "./routes";
import connectDB from "./db";

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