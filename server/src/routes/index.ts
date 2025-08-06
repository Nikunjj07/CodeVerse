import express, {Router} from 'express'
import userRouter from './user'
import submissionRouter from './submissions';

const mainRouter = express.Router();

mainRouter.use('/user', userRouter)
mainRouter.use('/submission', submissionRouter)

export default mainRouter