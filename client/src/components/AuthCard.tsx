import { Button } from "./Button"
import { InputBox } from "./InputBox"

export const AuthCard = ({ InputHeader }: { InputHeader: "Sign In" | "Sign Up" }) => {
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex  justify-center">
                <div className="min-w-sm min-h- p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
                        {InputHeader == "Sign In" ? "Welcome Back" : "Create New Account"}
                    </h2>
                    <InputBox InputLabel="Email" />
                    <InputBox InputLabel="Password" type="password"/>
                    <Button label={InputHeader} onClick={() => console.log("Button Clicked")} />
                    <p className="text-sm text-gray-400 text-center mt-4">
                        {InputHeader == "Sign In" ? "Don't have an account?" : "Already have an account?"}
                        <a href={InputHeader == "Sign In" ? "/signup" : "/signin"} className="hover:underline">
                            {InputHeader == "Sign In" ? " Sign Up" : " Sign In"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}