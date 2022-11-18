import React from "react";

const Spinner = ({text}) => {
  return (
    <div className="text-center">
      <p>{text}</p>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner
