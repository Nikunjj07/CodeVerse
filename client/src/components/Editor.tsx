import { Editor } from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";
import { useRef } from "react";

export const CodeEditor = () => {
    const editorRef = useRef<any>(null);

    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    return (
        <div className="p-10">
            <Editor
                height="90vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue="//print('Hello, world!')"
                onMount={handleEditorDidMount}
            />
        </div>
    );
}