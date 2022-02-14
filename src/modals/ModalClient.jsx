import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalClient = (props) => {
  return (
    <div>
      <Modal
        title="Client"
        subTitle="If your Client already have Node, click on Scan"
        buttonText="Add"
        {...props}
      >
        <div className="client-modal-body">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                <FancyInput
                  prominant
                  sMargin
                  largePaddingBottom
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="phone"
                  name="phone"
                  label="Phone"
                  placeholder="Start typing..."
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalClient;
