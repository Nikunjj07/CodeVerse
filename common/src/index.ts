import z from "zod";

export const signupInput = z.object({
    username: z.string().min(2).max(50),
    email: z.email(),
    password: z.string().min(6).max(50)
})

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.email(),
    password: z.string().min(6)
})

export type SigninType = z.infer<typeof signinInput>;

export const createUserSubmission = z.object({
    user_id: z.string(),
    language_id: z.number(),
    source_code: z.string()
})

export type CreateSubmissionType = z.infer<typeof createUserSubmission>;

export const updateSubmissionInput = z.object({
    language_id: z.number(),
    source_code: z.string()
})

export type UpdateSubmissionType = z.infer<typeof updateSubmissionInput>;