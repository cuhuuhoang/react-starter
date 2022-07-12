import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="modal-dialog modal-sm" role="document" style={{width: '100%'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm</h5>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" id="modal-btn-si">Approve</button>
          <button type="button" className="btn btn-primary" id="modal-btn-no">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard
