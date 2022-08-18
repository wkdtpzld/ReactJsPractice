import React, { useEffect, useRef, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }

  // Title 값이 변경될 때에만 렌더링
  useEffect(updateTitle, [title]);

  return setTitle;
}

export default function App() {

  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}