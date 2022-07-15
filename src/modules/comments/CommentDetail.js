import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-sm-2">
            <img className="rounded-circle" src={props.avatar} width="40" />
          </div>
          <div className="col-sm-8">
            <h5 className="card-title">{props.author}</h5>
          </div>
        </div>
        <p className="card-text">{props.content}</p>
        <p className="card-text"><small className="text-muted">{props.date}</small></p>
      </div>
    </div>
  );
}

export default CommentDetail
