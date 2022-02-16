import React from "react";

import Modal from "./Modal";

const ModalForm = (props) => {
  return (
    <div>
      <Modal
        titleVector="./assets/vectors/modal-forms.svg"
        title="Forms"
        buttonText="Add"
        {...props}
      >
        <div className="form-modal-body">
          <div className="item">
            <img src="./assets/vectors/form-img.svg" alt="form-img" />
            <div className="text-x-small dark">Brake Check</div>
          </div>
          <div className="item">
            <img src="./assets/vectors/form-img.svg" alt="form-img" />
            <div className="text-x-small dark">Inspection</div>
          </div>
          <div className="item">
            <img src="./assets/vectors/form-img.svg" alt="form-img" />
            <div className="text-x-small dark">Battery Volt</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
