/* eslint-disable @typescript-eslint/no-explicit-any */
// Note: Actual backend API calls
import axios from "axios"; // info: axios instance with base URL
import { API } from "./endpoint";

export const register = async(registerData: any) => {
  try {
    console.log("Auth bitra aayo")
    console.log(registerData);
    console.log(`Route : ${API.AUTH.REGISTER}`);
    const response = await axios.post(`http://localhost:5050${API.AUTH.REGISTER}`, registerData);
    console.log("response :")
    console.log(response);
    return response.data; // response ko body (what backend returns)
  } catch (error: Error | any) {
    console.log("Auth ko error bitra aayo");
    // info: if 4xx/5xx error, axios throws error
    throw new Error(
      error.response?.data?.message // backend error message
      || error.message // general axios error message
      || "Registration Failed" // fallback message
    )
  }
}

export const login = async(registerData: any) => {
  try {
    const response = await axios.post(API.AUTH.LOGIN, registerData);
    return response.data; // response ko body (what backend returns)
  } catch (error: Error | any) {
    // info: if 4xx/5xx error, axios throws error
    throw new Error(
      error.response?.data?.message // backend error message
      || error.message // general axios error message
      || "Login Failed" // fallback message
    )
  }
}
