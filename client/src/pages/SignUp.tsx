import { AuthCard } from "../components/AuthCard";

export const SignUp = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1">
                <AuthCard InputHeader="Sign Up" />
            </div>
            <div className="bg-gradient-to-tr from-purple-700 to-pink-600 col-span-2">
                <div className="flex items-center justify-center h-screen flex-col">
                    <h1 className="text-6xl font-extrabold opacity-80">CodeVerse</h1>
                    <p className="text-lg text-gray-300">Easily Compile and Run your Code</p>
                </div>
            </div>
        </div> 
    );
}