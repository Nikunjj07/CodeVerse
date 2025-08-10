import { Request, Response } from "express";
import Submission from "../models/Submission";
import { ISubmission } from "../types/types";
import mongoose from "mongoose";

/**
 * @desc    Create a new submission
 * @route   POST /api/submissions
 * @access  Public or Protected (you decide based on auth)
 */
export const createSubmission = async (req: Request, res: Response) => {
  try {
    const { user, language, sourceCode, input, status, error } = req.body;

    if (!user || !language || !sourceCode) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newSubmission: ISubmission = await Submission.create({
      user,
      language,
      sourceCode,
      input,
      status,
      error,
    });

    res.status(201).json(newSubmission);
  } catch (err) {
    console.error("Error creating submission:", err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};

/**
 * @desc    Get all submissions by a user
 * @route   GET /api/submissions/user/:userId
 * @access  Public or Protected
 */
export const getSubmissionsByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const submissions = await Submission.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

/**
 * @desc    Get a single submission by ID
 * @route   GET /api/submissions/:id
 * @access  Public or Protected
 */
export const getSubmissionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid submission ID" });
  }

  try {
    const submission = await Submission.findById(id);

    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    res.status(200).json(submission);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

/**
 * @desc    Update a submission (e.g. re-run, edit code)
 * @route   PUT /api/submissions/:id
 * @access  Protected (optional)
 */
export const updateSubmission = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid submission ID" });
  }

  try {
    const updated = await Submission.findByIdAndUpdate(id, updateData, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Submission not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

/**
 * @desc    Delete a submission
 * @route   DELETE /api/submissions/:id
 * @access  Protected (optional)
 */
export const deleteSubmission = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid submission ID" });
  }

  try {
    const deleted = await Submission.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Submission not found" });
    }

    res.status(200).json({ message: "Submission deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};