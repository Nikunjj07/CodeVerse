export const InputBox = ({ InputLabel, type }: { InputLabel: string; type?: string }) => {
    return (
        <div className="m-4">
            <label htmlFor="input" className="block text-sm font-medium text-gray-100">{InputLabel}</label>
            <input type={type || "text"} id="input" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    )
}