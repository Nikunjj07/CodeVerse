import { useState } from "react"
import { signUp } from "../services/api"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { useNavigate } from "react-router-dom"

export const SignupCard = () => {
    const navigate  = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="min-w-sm min-h- p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
                        {"Create New Account"}
                    </h2>
                    <InputBox InputLabel="Username" onChange={(e)=>{
                        setUsername(e.target.value);
                    }}/>
                    <InputBox InputLabel="Email" onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <InputBox InputLabel="Password" type="password" onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    <Button label={"Sign Up"} onClick={async () => {
                        const res = await signUp({
                            username,
                            email,
                            password
                        })
                        if(res.ok){
                            navigate("/dashboard")
                        }
                    }} />
                    <p className="text-sm text-gray-400 text-center mt-4">
                        {"Already have an account?"}
                        <a href="/signin" className="hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}