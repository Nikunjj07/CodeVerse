import { useState } from "react";
import{ InputBox } from "./InputBox";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function PopUpInput({OnClose, OnSubmit}:{OnClose:()=>void, OnSubmit: (subName:string)=>void}){
    const [subName, setSubName] = useState("");

    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/80 bg-opacity-25">
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-zinc-800 p-6 rounded-xl shadow-2xl h-75 w-96 flex flex-col gap-4"
        >
            <InputBox InputLabel="File Name" type="text" onChange={(e)=>{
                setSubName(e.target.value)
            }}/>
            <Button label="Save" onClick={() => OnSubmit(subName)} />
            <Button label="Close" onClick={OnClose} />
        </motion.div>
    </div>
}