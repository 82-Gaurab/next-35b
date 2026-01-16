/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const MyContext = createContext<any>(null);
export const MyContextProvider = ({children} : {children: ReactNode}) => {
  const [value, setValue] = useState(0); // shared state
  return (
    // value to share
    <MyContext.Provider value={{value, setValue}}>  
      {children}
    </MyContext.Provider>
  )
}

export default function Page() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

function MyComponent() {
  const {value, setValue} = useContext(MyContext);
  return(
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <AnotherComponent />
    </div>
  )
}

function AnotherComponent() {
  const {value, setValue} = useContext(MyContext);
  return(
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue((prev:number) => prev - 1)}>Decrement</button>
    </div>
  )
}