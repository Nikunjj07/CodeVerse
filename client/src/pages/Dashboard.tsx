import { Navbar } from "../components/Navbar";
import { SubmissionBox } from "../components/SubmissionBox";

export const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div>
                <div className="text-left text-6xl font-bold px-5 pt-20">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Welcome!</span>
                </div>
                <div className="flex flex-col py-10 px-5">
                    <span className="text-2xl font-bold py-2">Quick Actions</span>
                    <button className="max-w-xs h-30 text-white bg-zinc-800 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-lg text-xl px-5 py-2.5 me-2 mb-2">
                        New Project +
                    </button>
                </div>
                <div>
                    <SubmissionBox />
                </div>
            </div>
        </div>
    );
}