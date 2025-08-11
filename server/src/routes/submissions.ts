import express, {Router} from 'express'
import { authMiddleware } from '../middleware';
import { createSubmission, deleteSubmission, getSubmissionById, getSubmissionsByUser, runCode, updateSubmission } from '../controllers/submissionController';
const submissionRouter = Router();

submissionRouter.post("/save",authMiddleware,createSubmission)
submissionRouter.post("/run",authMiddleware,runCode);
submissionRouter.get("/all", authMiddleware, getSubmissionsByUser);
submissionRouter.get("/:id", authMiddleware, getSubmissionById);
submissionRouter.put("/update/:id",authMiddleware,updateSubmission);
submissionRouter.delete("/delete/:id",authMiddleware,deleteSubmission);

export default submissionRouter