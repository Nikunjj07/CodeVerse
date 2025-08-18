export const SubmissionCard = ({ title, description, createdAtDate, language, onClick }: { title: string; description: string; createdAtDate: string; language: string; onClick: () => void }) => {
    return (
        <div onClick={onClick} className="bg-neutral-800  max-w-sm p-4 rounded-lg shadow-md hover:bg-neutral-600 cursor-pointer group">
            <h3 className="text-lg font-bold py-1 group-hover:text-purple-400">{title}</h3>
            <p className="opacity-70">{description}</p>
            <p className="opacity-70">{language}</p>
            <p className="opacity-70">{createdAtDate}</p>
        </div>
    )
}