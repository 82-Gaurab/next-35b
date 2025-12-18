import { ChangeEvent, useState } from "react";

export const  useLoginForm = () => {
  // hook naming convention: "use" + Functionality
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loginData = {
      email,
      password
    }
    alert("Login with "+ email + " "+ password)
    // call api later
  }

  return {
    email, password,
    handleEmail, handlePassword, handleSubmit
  }
}