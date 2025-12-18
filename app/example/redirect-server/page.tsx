/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {loginAction} from "./actions/login";
import {useState, useTransition} from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [isPending, startTransition] = useTransition();


  // const handleSubmit = async () => {
  //   try {
  //     await loginAction(username);
  //   } catch (err: Error | any) {
  //     alert(err.message ?? "Form Error");
  //   }
  // }
  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await new Promise( resolve => setTimeout(resolve, 2000)); // simulate delay
        await loginAction(username);
      } catch (error: Error | any) {
        alert(error.message ?? "Form error")
      }
    })
  }
  // navigation will be pending and won;t block the ui
  // can use state isPending to show loading indicator
  return (
    <div>
      <label> Username </label>
      <input className="border" onChange={(e) => setUsername(e.target.value)} />
      <div>
        <button
        disabled = {isPending} 
        className="p-2 bg-gray-600" onClick={handleSubmit}>
          {isPending ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}