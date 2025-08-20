import { languages } from "../constants";
import { runCode } from "../services/api";

type LanguageId = keyof typeof languages;

export const OutputBox = ({editorRef, language}:{editorRef: React.RefObject<any>, language: string}) => {
    const handleRunCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) {
            return
        }
        const languageId = languages[language as LanguageId];
        try{
            const response = await runCode({ source_code: sourceCode, language_id: languageId });
            console.log("Response from server:", response);
        }catch (error) {
            console.error("Error running code:", error);
        }
    };
    return (
        <div className="px-4">
            <h2 className="text-lg font-bold mb-2">Output</h2>
            <button className="inline-flex justify-center gap-x-1.5 rounded-lg bg-neutral-800 mb-2 px-3 py-1 text-sm font-semibold text-white hover:bg-white/20" onClick={handleRunCode}>Run Code</button>
            <div className="bg-neutral-800 text-white p-4  h-[80vh] overflow-auto">
                <p>test</p>
            </div>
        </div>
    );  
}