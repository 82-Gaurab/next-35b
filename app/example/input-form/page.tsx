"use client";
// import { useState, ChangeEvent } from "react";
import { useLoginForm } from "./hooks/use-login";

export default function Page() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
    // e- event, target - element, value - current value of input
  // }
  const {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
  } = useLoginForm(); // destructure returned object from hook

  return (
    <div>
      <div>
        <label>Email:</label>
        <input className="border" type="email" value={email} onChange={handleEmail} />
      </div>
      <div>
        <label>Password:</label>
        <input className="border" type="password" value={password} onChange={handlePassword} />
      </div>
      <button onClick={handleSubmit}>Test</button>
    </div>
  );
}