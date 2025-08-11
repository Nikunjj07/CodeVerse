import express, {Router} from 'express'
import { authMiddleware } from '../middleware';
import { runCode } from '../controllers/submissionController';
const submissionRouter = Router();

submissionRouter.post("/save",authMiddleware,(req,res)=>{
    res.json({
        message: "hello"
    })
})
submissionRouter.post("/run",authMiddleware,runCode);


export default submissionRouter