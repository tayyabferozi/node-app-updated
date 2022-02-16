import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalNode = (props) => {
  return (
    <div>
      <Modal
        buttonText="Node"
        className="node-modal"
        bodyClassName="node-modal-body-container"
        {...props}
      >
        <div className="node-modal-body">
          <h3 className="mb-3 section-title">Node Something</h3>

          <FancyInput
            smallLabel
            id="tires"
            name="tires"
            label="Choose from the List "
            placeholder="Start typing..."
            value="2021 GoodRich Tires"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalNode;
