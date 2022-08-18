import React, { useEffect, useRef } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePreve = () => window.removeEventListener("beforeunload", listener);

  return { enablePreve, disablePreve };
};

export default function App() {
  const { enablePreve, disablePreve } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>UnProtect</button>
    </div>
  );
}
