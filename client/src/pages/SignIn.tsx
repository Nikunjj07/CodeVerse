import { AuthCard } from "../components/AuthCard";

export const SignIn = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="">
                <AuthCard InputHeader="Sign In" />
            </div>
            <div className="bg-gradient-to-r from-neutral-900 to-zinc-800">
                <div className="flex items-center justify-center h-screen flex-col">
                    <h1 className="text-6xl font-extrabold">CodeVerse</h1>
                    <p className="text-lg text-gray-300">Easily Compile and Run your Code</p>
                </div>
            </div>
        </div> 
    );
}