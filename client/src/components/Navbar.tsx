import { useNavigate } from "react-router-dom"
import { logoutUser } from "../services/api"
import { Button } from "./Button"

export const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="bg-neutral-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between mx-auto p-2 ">
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-serif px-5">
                    <a href="/dashboard">
                        CodeVerse
                    </a>
                </span>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <Button label="Editor" onClick={()=>{
                        navigate("/new");
                    }} />
                    <Button label="Logout" onClick={async()=>{
                        const res = await logoutUser();
                        if(res.ok){
                            navigate("/");
                        }
                    }}/>
                </div>
            </div>
        </nav>

    )
}