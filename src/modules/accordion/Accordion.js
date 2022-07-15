import React, {useState} from "react";

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    return (
      <div key={index} className="accordion-item">
        <h2 className="accordion-header">
          <button className={`accordion-button ${index === activeIndex ? "" : "collapsed"}`} type="button" onClick={() => onTitleClick(index)}>
            {item.title}
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${index === activeIndex ? "show" : ""}`}>
          <div className="accordion-body">
            {item.content}
          </div>
        </div>
      </div>
    )
  });

  return <div className="accordion">{renderedItems}</div>;
}

export default Accordion