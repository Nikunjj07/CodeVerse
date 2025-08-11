import express, {Router} from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/authController';
import { authMiddleware } from '../middleware';

const userRouter = Router();

userRouter.post("/signup",registerUser);
userRouter.post("/signin", loginUser);
userRouter.post("/logout",authMiddleware,logoutUser);

export default userRouter;