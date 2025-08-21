import { useState } from "react";
import { languages } from "../constants";
import { runCode } from "../services/api";

export type LanguageId = keyof typeof languages;

export const OutputBox = ({editorRef, language}:{editorRef: React.RefObject<any>, language: string}) => {

    const [output, setOutput] = useState<string[] | null>(null);
    const [error, setError] = useState(false);
    const handleRunCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) {
            return
        }
        const languageId = languages[language as LanguageId];
        try{
            const response = await runCode({ source_code: sourceCode, language_id: languageId });
            if (response.stdout) {
                setOutput(response.stdout.split("\n"));
                response.stderr ? setError(true) : setError(false);
                return;
            }
            response.stderr ? setError(true) : setError(false);
            setOutput(response.stderr.split("\n"));
            
        }catch (error) {
            console.error("Error running code:", error);
        }
    };
    return (
        <div className="px-4">
            <h2 className="text-lg font-bold mb-2">Output</h2>
            <button className="inline-flex justify-center gap-x-1.5 rounded-lg bg-neutral-900 mb-2 px-6 py-2 text-sm font-semibold text-purple-400 hover:bg-white/20 border border-purple-400 " onClick={handleRunCode}>Run</button>
            <div className={`${error ? "border-red-500/50 text-red-400/50" : "border-neutral-800 text-neutral-400"} border-1 bg-neutral-800  p-4  h-[80vh] overflow-auto`}>
                <p>{output ? output.map((line, index) => 
                    <span key={index}>{line}<br /></span>
                )
                : "Click 'Run' to Execute"}</p>
            </div>
        </div>
    );  
}