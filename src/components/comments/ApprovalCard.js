import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="card m-3">
        <div className="card-header">
          Confirm
        </div>
        <div className="card-body">
          {props.children}
        </div>
        <div className="card-footer ">
          <button type="button" className="btn btn-primary">Approve</button>
          <button type="button" className="btn btn-default">Reject</button>
        </div>
    </div>
  );
};

export default ApprovalCard
