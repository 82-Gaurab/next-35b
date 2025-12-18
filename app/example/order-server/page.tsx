/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useTransition } from "react";
import{ orderAction} from "./actions/order";

export default function Page() {
  const [status, setStatus] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await new Promise( resolve => setTimeout(resolve, 2000)); // simulate delay
        await orderAction(status);        
      } catch (err: Error | any) {
        alert(err.message ?? "Order Error")
      }
    });
  }

  return (
    <div>
      <label> Username </label>
      <input className="border" onChange={(e) => setStatus(e.target.value)} />
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