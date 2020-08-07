import React, { useState } from "react";

function LanguageModal(props) {
  return (
    <div className="modal language-modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Select language (ഭാഷ തിരഞ്ഞെടുക്കൂ)
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.handleHideLanguageModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div
              className="box"
              onClick={() => {
                props.handleLanguage("Malayalam");
                props.handleHideLanguageModal();
              }}
            >
              Malayalam
            </div>
            <div
              className="box"
              onClick={() => {
                props.handleLanguage("English");
                props.handleHideLanguageModal();
              }}
            >
              English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageModal;
