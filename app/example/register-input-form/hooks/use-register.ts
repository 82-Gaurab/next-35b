import { ChangeEvent, useState } from "react"

export const useRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = () => {
    if (username.trim() == "" || email.trim() == "" || password.trim() == "" || confirmPassword.trim() =="" ) {
      alert("All Field is required")
    } else if(password !== confirmPassword) {
      alert("Password and confirm password are not same")
    } else {
      alert(`New account created with \nUsername:${username}
        \nEmail: ${email}
        \nPassword: ${password}`)
    }
  }

  return {
    username,email,password, confirmPassword,
    handleUsername,handleEmail, handlePassword, handleConfirmPassword,
    handleSubmit
  }
}