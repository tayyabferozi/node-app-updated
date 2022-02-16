import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalProfile = (props) => {
  return (
    <div>
      <Modal
        titleVector="./assets/vectors/modal-profile.svg"
        title="Profile"
        className="profile-modal"
        buttonText="Save"
        // headInput={{
        //   prominantBlue: true,
        //   id: "type",
        //   name: "type",
        //   label: "Profile type",
        //   value: "VEHICLE",
        // }}
        headInput={{
          prominant: true,
          select: true,
          id: "type",
          name: "type",
          label: "Profile type",
          options: [{ text: "VEHICLE" }],
        }}
        {...props}
      >
        <div className="profile-modal-body">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  id="vin"
                  name="vin"
                  label="VIN"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  sMargin
                  id="client"
                  name="client"
                  label="Node Client"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  prominant
                  sMargin
                  id="year"
                  name="year"
                  label="YEAR"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  prominant
                  sMargin
                  id="make"
                  name="make"
                  label="MAKE"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  prominant
                  sMargin
                  id="model"
                  name="model"
                  label="MODEL"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-12">
                <FancyInput
                  prominant
                  sMargin
                  type="file"
                  id="upload"
                  name="model"
                  label="Attachments"
                  label2="Upload your attachment"
                  placeholder="Type a Valide VIN"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProfile;
