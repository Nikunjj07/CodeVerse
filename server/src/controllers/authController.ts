import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { signupInput , signinInput} from "codeverse-common"
//add schema validation

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const parsed = signupInput.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid input"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({
        email
    });
    if (existingUser) {
      return res.status(400).json({ 
        message: "Email already taken" 
      });
    }

    const user = await User.create({
        username,
        email,
        password: hashedPassword 
    });

    const token = sign({id: user.id}, process.env.JWT_SECRET || "")
    res.cookie("token", token);
    res.status(201).json({
        message: "user created successfully"
    });

  } catch (err) {
    res.status(400).json({
        error: "Registration failed",
        details: err
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        const parsed = signinInput.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid input"
            });
        }
        const user = await User.findOne({
            email
        });
        if (!user){
            return res.json({
                message: "user not found"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({
                message: "Incorrect Password"
            });
        }

        const token = sign({id: user.id},process.env.JWT_SECRET || "");
        res.cookie("token",token);
        res.status(200).json({
            message: "Logged In!"
        });

    }catch (err) {
        res.status(400).json({
            error: "Login failed",
            details: err
        });
    }
}

export const logoutUser = (req: Request, res: Response) => {
    res.clearCookie("token");
    return res.json({
        message:"Logged Out!"
    });
}

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};