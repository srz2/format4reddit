"use client"

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function CodeInput() {
    const [userCode, setUserCode] = useState("");

    function clearInput() {
        setUserCode("")
    }

    function formatCode(e) {
        e.preventDefault();

        var lines = userCode.split('\n')
        for (let index = 0; index < lines.length; index++) {
            const line = lines[index];

            // Prepend each line with 4 spaces
            lines[index] = "    " + line
        }

        setUserCode(lines.join("\n"))

        // Alert the user
        toast("Code has been formatted!")
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(userCode)

        // Alert the user
        toast('Code has been copied to clipboard')
    }

    function downloadToFile() {
        const filename = `format4reddit-output.txt`
        download(filename, userCode)
    }

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }

    return (
        <div className="input-container">
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnHover
            theme="dark"
            />
            <div className="input-nav-bar">
                <h1>Your Code:</h1>
                <button onClick={clearInput} type="button">Clear</button>
            </div>
            <form action="#" method="post">
                <textarea name="raw-code" id="raw-code-input" placeholder="Copy your code here..." value={userCode} onChange={(e) => setUserCode(e.target.value)}></textarea>
                <button onClick={formatCode} type="submit">Format</button>
                <div className="button-exports">
                    <button onClick={copyToClipboard} type="button">Copy to Clipboard</button>
                    <button onClick={downloadToFile} type="button">Download File</button>
                </div>
            </form>
        </div>  
    );
}