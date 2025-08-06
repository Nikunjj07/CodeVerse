import express, {Router} from 'express'
const userRouter = Router();

userRouter.post("/signup",(req,res)=>{
    const body = req.body;
    const secret = process.env.JWT_SECRET || "";

    const {success} = signupSchema.safeParse(body);
    if(!success){
        res.json({
            message:"Incorrect Inputs!"
        });    
    }
    const findUser = await client.user.findFirst({
        where:{
            email: body.email
        }
    })
    if(findUser){
        res.json({
            message: "Email already taken / Incorrect inputs"
        })
        return

})

export default userRouter