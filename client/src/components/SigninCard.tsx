import { useState } from "react"
import { signIn } from "../services/api"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { useNavigate } from "react-router-dom"

export const SigninCard = () => {
    const navigate  = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="min-w-sm min-h- p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">
                        {"Welcome Back"}
                    </h2>
                    <InputBox InputLabel="Email" onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <InputBox InputLabel="Password" type="password" onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    <Button label={"Sign In"} onClick={() => {
                    signIn({
                        email,
                        password
                    }).then((res)=>{
                        if(res.status == 201){
                            navigate("/dashboard")
                        }else{
                            alert("Login Failed!")
                        }
                    })
                    }} />
                    <p className="text-sm text-gray-400 text-center mt-4">
                        {"Don't have an account?"}
                        <a href="/signup" className="hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}