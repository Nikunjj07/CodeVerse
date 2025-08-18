import { Editor } from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { codeSnippets } from "../constants";

export type LanguageKey = keyof typeof codeSnippets;

export const CodeEditor = () => {
    const editorRef = useRef<any>(null);
    const [language, setLanguage] = useState("javascript");
    const [value, setValue] = useState<string>(codeSnippets["javascript"]);

    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language: LanguageKey) => {
        setLanguage(language);
        setValue(codeSnippets[language]);
    }

    return (
        <div className="p-10">
            <div className="">
                <LanguageSelector language={language} onSelect={onSelect} />
            </div>
            <Editor
                height="80vh"
                theme="vs-dark"
                language={language}
                defaultValue={value}
                onMount={handleEditorDidMount}
            />
        </div>
    );
}