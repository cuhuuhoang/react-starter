import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="bg-white p-2 m-2">
      <div className="d-flex flex-row user-info">
        <img className="rounded-circle" src={props.avatar}  width="40" />
        <div className="d-flex flex-column justify-content-start ml-2">
          <span className="d-block font-weight-bold name">{props.author}</span>
          <span
          className="date text-black-50">{props.date}</span></div>
      </div>
      <div className="mt-2">
        <p className="comment-text">{props.content}</p>
      </div>
    </div>
  );
}

export default CommentDetail
