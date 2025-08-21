import { useNavigate } from "react-router-dom";
import { getKeyByValue, languages } from "../constants";
import { SubmissionCard } from "./SubmissionCard";

export const SubmissionBox = ({submissionList}:{submissionList:any}) => {
    const navigate = useNavigate();
    return (
        <div className="p-5 select-none">
            <h2 className="text-2xl font-bold mb-4">Submissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {submissionList.length > 0 ? submissionList.map((submission:any) => {
                    return (
                        <SubmissionCard 
                            key={submission._id}
                            id={submission._id}
                            title={submission.name}
                            language={getKeyByValue(languages, Number(submission.language)) || "Unknown"} //calls function to get lang name
                            createdAtDate={new Date(submission.createdAt).toLocaleDateString()}
                            onClick={async () => {
                                navigate(`/submission/${submission._id}`);
                            }}
                        />
                    );
                }) : <p className="font-semibold text-xl">No Submissions Found</p>}
            </div>
        </div>
    );
}