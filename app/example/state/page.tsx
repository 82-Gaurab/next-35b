"use client";
// user interactivity/ states

import { useEffect, useState } from "react";
export default function Page() {
  const [count, setCount] = useState(1);
  // state hooks
  // [value, setter function]
  // state is variable that causes component to re-render when changed
  // when count changes, component using "count" re-renders

  const handlePlus = () => {
    setCount(count+1);
  }

  // dependency check/watch
  useEffect(()=>{
    alert("Component mounted")
  },[]);// [] -> when page load

  useEffect(()=>{
    if (count === 0){
      alert("Count is zero")
    }
  },[count]); // every time count changes. this function runs
  // [count, var,...] multiple dependencies can be watched

  return (
    // re-render this when state changes
    <div>
      <div>Count: {count}</div>
      <button className="border p-2 bg-blue-500 text-white rounded" onClick={handlePlus}>
        Plus
      </button>
      <button className="border p-2 bg-red-500 text-white rounded" onClick={() => setCount(count-1)}>
        Minus
      </button>
    </div>
  );
}