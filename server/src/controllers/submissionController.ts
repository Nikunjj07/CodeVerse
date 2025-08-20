import { Request, Response } from "express";
import Submission from "../models/Submissions";
import axios from "axios";
import { createUserSubmission , updateSubmissionInput } from "codeverse-common";
const JUDGE0_API = process.env.JUDGE0_API;
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;

export const runCode = async (req: Request, res: Response) => {
  try {
    const { source_code, language_id } = req.body;

    if (!source_code || !language_id) {
      return res.status(400).json({ error: "source_code and language_id are required" });
    }

    // const encodedCode = Buffer.from(source_code, "utf-8").toString("base64"); // base64 encoding confirm this.

    const createSubmissionRes = await axios.post(`${JUDGE0_API}`,
        {
            source_code,
            language_id
        },
        {
            params: {
                base64_encoded: 'false',
                wait: 'false',
                fields: '*'
            }, 
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-key": JUDGE0_API_KEY,
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            }
        }
    );

    const token = createSubmissionRes.data.token;

    let result = null;
    for (let i = 0; i < 10; i++) {
      const statusRes = await axios.get(`${JUDGE0_API}/${token}?base64_encoded=false`, {
        headers: {
          "X-RapidAPI-Key": JUDGE0_API_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com" ,
        }
      });

      if (statusRes.data.status?.id >= 3) {
        result = statusRes.data;
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    if (!result) {
      return res.status(408).json({ error: "Execution timed out" });
    }

    res.status(200).json(result.stdout);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error running code" });
  }
};

export const createSubmission = async (req: Request, res: Response) => { //add default name
  try {
    const { language_id, source_code } = req.body;
    const parsed = createUserSubmission.parse(req.body);
    if(!parsed) {
      return res.status(400).json({ 
        message: "Invalid submission data" 
      });
    }
    const userId = req.userId;

    if (!userId || !language_id || !source_code) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newSubmission = await Submission.create({
      user: userId,
      language: language_id,
      sourceCode: source_code
    });

    res.status(201).json(newSubmission);
  } catch (err) {
    console.error("Error creating submission:", err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};


export const getSubmissionsByUser = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId){
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const submissions = await Submission.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const getSubmissionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
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

export const updateSubmission = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const parsed = updateSubmissionInput.safeParse(updateData);
  if (!id) {
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


export const deleteSubmission = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
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