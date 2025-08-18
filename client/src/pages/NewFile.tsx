import { CodeEditor } from "../components/Editor";
import { Navbar } from "../components/Navbar";

export const NewFile = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-10">
                <CodeEditor />
            </div>
        </div>
    );
}