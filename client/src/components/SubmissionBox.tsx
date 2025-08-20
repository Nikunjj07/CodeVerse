import { getKeyByValue, languages } from "../constants";
import { getSubmissionById } from "../services/api";
import { SubmissionCard } from "./SubmissionCard";

export const SubmissionBox = ({submissionList}:{submissionList:any}) => {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Submissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {submissionList.length > 0 ? submissionList.map((submission:any) => {
                    return (
                        <SubmissionCard 
                            key={submission._id}
                            id={submission._id}
                            title={submission.name}
                            language={getKeyByValue(languages, Number(submission.language)) || "Unknown"}
                            createdAtDate={new Date(submission.createdAt).toLocaleDateString()}
                            onClick={async () => {
                                const res = await getSubmissionById(submission._id);
                                if(res.ok){
                                    console.log("Submission details", res.data);
                                }else{
                                    console.error("Failed to fetch submission details", res.data);
                                }
                            }}
                        />
                    );
                }) : <p className="font-semibold text-xl">No Submissions Found</p>}
            </div>
        </div>
    );
}