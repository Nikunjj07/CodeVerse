import { useState } from "react";
import { languages } from "../constants";
import { runCode } from "../services/api";

type LanguageId = keyof typeof languages;

export const OutputBox = ({editorRef, language}:{editorRef: React.RefObject<any>, language: string}) => {
    const [output, setOutput] = useState<string | null>(null);
    const handleRunCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) {
            return
        }
        const languageId = languages[language as LanguageId];
        try{
            const response = await runCode({ source_code: sourceCode, language_id: languageId });
            if (response.stdout) {
                setOutput(response.stdout);
                return;
            }
            setOutput(response.stderr);
        }catch (error) {
            console.error("Error running code:", error);
        }
    };
    return (
        <div className="px-4">
            <h2 className="text-lg font-bold mb-2">Output</h2>
            <button className="inline-flex justify-center gap-x-1.5 rounded-lg bg-neutral-900 mb-2 px-6 py-2 text-sm font-semibold text-purple-400 hover:bg-white/20 border border-purple-400 " onClick={handleRunCode}>Run</button>
            <div className="bg-neutral-800 text-white p-4  h-[80vh] overflow-auto">
                <p>{output}</p>
            </div>
        </div>
    );  
}