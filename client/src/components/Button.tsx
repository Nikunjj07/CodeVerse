export const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return <div className="flex justify-center">
        <button type="button" className="text-white bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
        onClick={onClick}>
            {label}
        </button>
    </div>

}