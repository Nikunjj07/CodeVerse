import { Schema, model } from 'mongoose';

const submissionSchema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    error: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Submission = model('Submission', submissionSchema);

export default Submission;