import express, {Router} from 'express'
const submissionRouter = Router();

submissionRouter.post("/save",(req,res)=>{
    res.json({
        message: "hello"
    })
})

export default submissionRouter