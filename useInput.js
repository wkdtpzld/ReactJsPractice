import React, { useState } from "react";

export default function App() {

  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {

      let willUpdate = true;
      
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }

      if (willUpdate) {
        setValue(event.target.value);
      }
    }
    return { value, onChange };
  }

  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);


  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}