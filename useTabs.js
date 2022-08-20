import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I`m the content of the Section1"
  },
  {
    tab: "Section 2",
    content: "I`m the content of the Section2"
  }
];

const useTabs = (initinalTab, allTab) => {
  const [currentIndex, setCurrentIndex] = useState(initinalTab);

  if (!allTab || !Array.isArray(allTab)) {
    return;
  }
  console.log("hello");

  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      ;{currentItem.content}
    </div>
  );
}