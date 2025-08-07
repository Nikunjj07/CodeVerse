import express, {Router} from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/authController';

const userRouter = Router();

userRouter.post("/signup",registerUser);
userRouter.post("signin", loginUser);
userRouter.post("logout",logoutUser);

export default userRouter;