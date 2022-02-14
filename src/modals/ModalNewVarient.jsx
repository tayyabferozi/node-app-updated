import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalNewVarient = (props) => {
  return (
    <div>
      <Modal
        className="varient-modal"
        title="New variant"
        forText="Brake Change"
        buttonText="Add"
        headInput={{
          prominant: true,
          id: "type",
          name: "type",
          label: "Which type of Profile",
          placeholder: "Start typing to search...",
        }}
        {...props}
      >
        <div className="varient-modal-body">
          <div className="item">
            <FancyInput
              prominant
              id="article"
              name="article"
              label="Full name"
              placeholder="Select an article"
            />
            <img src="./assets/vectors/right-arrow.svg" alt="right-arrow" />
            <FancyInput
              prominant
              rootClassName="replace-by"
              id="sku"
              name="sku"
              label="SKU"
              placeholder="Replace by..."
            />
          </div>
          <div className="item">
            <FancyInput
              prominant
              id="article"
              name="article"
              label="Full name"
              placeholder="Select an article"
            />
            <img src="./assets/vectors/right-arrow.svg" alt="right-arrow" />
            <FancyInput
              prominant
              rootClassName="replace-by"
              id="sku"
              name="sku"
              label="SKU"
              placeholder="Replace by..."
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalNewVarient;
