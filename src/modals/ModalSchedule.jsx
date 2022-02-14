import React from "react";

import Modal from "./Modal";

const ModalSchedule = (props) => {
  return (
    <div>
      <Modal
        title="Schedule"
        forText="Zumba Class"
        buttonText="Define"
        {...props}
      >
        <div className="schedule-modal-body">
          <div className="item"></div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSchedule;
