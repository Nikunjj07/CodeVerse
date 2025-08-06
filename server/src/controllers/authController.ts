import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  // 1. Get user data from req.body
  // 2. Hash password
  // 3. Save user to DB
  // 4. Respond with success or error
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
    };
}
export const login = async (req: Request, res: Response) => {
  // 1. Check email & password
  // 2. Compare hashed password
  // 3. Create JWT token
  // 4. Return token and user data
};
