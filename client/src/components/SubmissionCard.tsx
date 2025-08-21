import { useState } from "react";
import { deleteSubmission } from "../services/api";

export const SubmissionCard = ({ id, title, createdAtDate, language, onClick }: { id: string; title: string; createdAtDate: string; language: string; onClick: () => void }) => {
    // const [onDelete, setOnDelete] = useState("");

    return (
        <div  className="bg-neutral-800  max-w-sm p-4 rounded-lg shadow-md hover:bg-neutral-600 cursor-pointer group hover:scale-105 transition-transform duration-200">
            <div className="flex items-top justify-between">
                <div onClick={onClick}>
                    <h3 className="text-lg font-bold py-1 group-hover:text-purple-400">{title}</h3>
                    <p className="opacity-70">{language}</p>
                    <p className="opacity-70">{createdAtDate}</p>
                </div>
                <div>
                    <button onClick={async()=>{
                        const res = await deleteSubmission(id)
                        if (res.ok) {
                            console.log("Submission deleted successfully");
                            // setOnDelete(id || "") soft reload
                            window.location.reload();
                        } else {
                            console.error("Failed to delete submission", res.data);
                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Bin--Streamline-Block-Free" height={16} width={16} className="fill-[#fcfcff] hover:fill-[#c084fc] cursor-pointer"><desc>{"\n    Bin Streamline Icon: https://streamlinehq.com\n  "}</desc><path fillRule="evenodd" d="M16 4v2h-2v10H2V6H0V4h4c0 -2.20914 1.79086 -4 4 -4 2.2091 0 4 1.79086 4 4l4 0ZM8.00005 2C9.10461 2 10 2.89544 10 4L6.00006 4c0 -1.10455 0.89543 -2 1.99999 -2Z" clipRule="evenodd" strokeWidth={1} /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}