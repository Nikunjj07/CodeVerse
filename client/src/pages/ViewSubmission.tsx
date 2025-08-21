import { CodeEditor } from "../components/Editor";
import { Navbar } from "../components/Navbar";
import { ViewEditor } from "../components/ViewEditor";

export const ViewSubmission = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-10">
                <ViewEditor />
            </div>
        </div>
    );
}