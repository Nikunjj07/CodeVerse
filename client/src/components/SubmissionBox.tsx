import { SubmissionCard } from "./SubmissionCard";

export const SubmissionBox = () => {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Submissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <SubmissionCard 
                    title="Submission 1" 
                    description="This is the first submission." 
                    language="JavaScript"
                    createdAtDate="2023-10-01"
                    onClick={() => console.log("Submission 1 clicked")} 
                />
                <SubmissionCard 
                    title="Submission 1" 
                    description="This is the first submission." 
                    language="JavaScript"
                    createdAtDate="2023-10-01"
                    onClick={() => console.log("Submission 1 clicked")} 
                />  
            </div>
        </div>
    );
}