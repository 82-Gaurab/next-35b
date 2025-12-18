"use client";

import { useRegisterForm } from "./hooks/use-register";

export default function Page() {

  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsername,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,

  } = useRegisterForm();


  return (
    <div>
      <div className="m-2">
        <label>Username: </label>
        <input className="border" value={username} onChange={handleUsername} type="text" />
      </div>
      <div className="m-2">
        <label>Email: </label>
        <input className="border" value={email} onChange={handleEmail} type="email" />
      </div>
      <div className="m-2">
        <label>Password: </label>
        <input className="border" value={password} onChange={handlePassword} type="password" />
      </div>
      <div className="m-2">
        <label>Confirm Password: </label>
        <input className="border" value={confirmPassword} onChange={handleConfirmPassword} type="password" />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}