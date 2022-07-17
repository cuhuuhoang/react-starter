import React from "react";
import ReactDOM from "react-dom";

const Modal = ({onDismiss, title, content, actions}) => {
  return ReactDOM.createPortal(
    <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle"
         style={{display: 'block'}} aria-modal="true" role="dialog" onClick={onDismiss}>
      <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">{title}</h5>
            <button type="button" className="btn-close" onClick={onDismiss} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            {actions}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default Modal