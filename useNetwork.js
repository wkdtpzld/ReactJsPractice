import React, { useEffect, useRef, useState } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleCahnge = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleCahnge);
    window.addEventListener("offline", handleCahnge);
    () => {
      window.removeEventListener("online", handleCahnge);
      window.removeEventListener("offline", handleCahnge);
    }
  }, [])
  return status;
}

export default function App() {
  const handleNet = online => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNet);

  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}
