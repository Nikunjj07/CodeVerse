import { Editor } from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { codeSnippets, getKeyByValue, languages } from "../constants";
import { OutputBox } from "./OutputBox";
import { updateSubmission } from "../services/api";
import { getSubmissionById } from "../services/api";
import { useParams } from "react-router";
import { PopUpInput } from "./PopUpInput";

export type LanguageKey = keyof typeof codeSnippets;

export const ViewEditor = () => {
    const { id }  = useParams();

    const editorRef = useRef<any>(null);
    const [language, setLanguage] = useState("javascript");
    const [value, setValue] = useState<string>(codeSnippets["javascript"]);

    

    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language: LanguageKey) => {
        setLanguage(language);
        // setValue(codeSnippets[language]);
    }

    useEffect(() => {
        if (id) {
            getSubmissionById(id).then((response) => {
                const langKey = getKeyByValue(languages, Number(response.language)) || "javascript";
                setLanguage(langKey);
                setValue(response.sourceCode);
            });
        }
    }, [id]);

    return (
        <div className="p-10 flex items">
            <div className="w-[60%]">
                <span className="font-bold text-xl">Language</span>
                <div className="mt-2 justify-between flex items-center">
                
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <button  className="inline-flex justify-center gap-x-1.5 rounded-lg bg-neutral-900 mb-2 px-6 py-2 text-sm font-semibold text-blue-400 hover:bg-white/20 border border-blue-400" onClick={() => {
                        const code = editorRef.current.getValue();
                        console.log("Updating submission with code:", code);
                        console.log("Language ID:", languages[language as LanguageKey]);
                        console.log("Submission ID:", id);
                        updateSubmission({
                            id: id || "",
                            source_code: code,
                            language_id: languages[language as LanguageKey]
                        }).then((res)=>{
                            if(res.ok){
                                alert("Submission updated successfully!");
                            }else{
                                alert("Failed to update submission.");
                            }
                        });
                    }}>Save</button>
                    
                </div>
                
                <Editor
                    height="80vh"
                    theme="vs-dark"
                    language={language}
                    //defaultValue="// Write your code here..."
                    value={value}
                    onChange={(value) => setValue(value || "")}
                    onMount={handleEditorDidMount}
                />
            </div>
            <div className="w-[40%]">
                <OutputBox editorRef={editorRef} language={language} />
            </div>
        </div>
    );
}