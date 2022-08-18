import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {

  const element = useRef();
  if (typeof onClick !== "function") {
    return;
  }

  useEffect(() => {
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;

}

export default function App() {

  const sayHello = () => {
    console.log("say Hello");
    
  }
  const title = useClick(sayHello);

  return (
    <div className="App">
      <div ref={title} > Hi</div>
    </div>
  );
}