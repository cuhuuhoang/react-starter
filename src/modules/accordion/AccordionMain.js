import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating modules",
  },
];

const AccordionMain = () => {
  return (
    <div className="container" style={{marginTop: '10px'}}>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionMain