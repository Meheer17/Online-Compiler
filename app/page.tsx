"use client"
import { useState } from "react";
import { runCode } from "./function";

export default function Home() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <h1>Online Compiler</h1>
      <textarea rows={10} cols={100} value={code} onChange={(e) => setCode(e.currentTarget.value)} className="text-black" placeholder="Enter your code here" />
      {/* <Button value={code} /> */}
      <button onClick={async () =>{
        setOutput(await runCode(code))
      }}>Run Code</button>
      <textarea value={output} readOnly cols={100} rows={10} className="text-black"/>
    </div>
  );
}
