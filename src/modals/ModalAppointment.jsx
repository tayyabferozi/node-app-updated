import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalAppointment = (props) => {
  return (
    <div>
      <Modal
        title="Appointment"
        buttonText="Add"
        headInput={{
          prominant: true,
          add: true,
          small: true,
          id: "assignedTo",
          name: "assignedTo",
          label: "Assigned to",
        }}
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
                  id="date"
                  name="date"
                  label="Date &amp; Duration"
                  placeholder="DD/MM/AA   at 00:000"
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="nodeClient"
                  name="nodeClient"
                  label="Node Client"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  add
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="services"
                  name="services"
                  label="Services &amp; Articles"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-8">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="notes"
                  name="notes"
                  label="Notes"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="nodedWith"
                  name="nodedWith"
                  label="Noded with"
                  placeholder="Select in menu"
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  mdPaddingBottom
                  id="location"
                  name="location"
                  label="Location"
                  placeholder="Select in the menu"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAppointment;
