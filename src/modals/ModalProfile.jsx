import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";

const ModalProfile = (props) => {
  return (
    <div>
      <Modal
        title="Profile"
        className="profile-modal"
        buttonText="Add"
        headInput={{
          prominantBlue: true,
          id: "type",
          name: "type",
          label: "Profile type",
          value: "VEHICLE",
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
                  largePaddingBottom
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
                  largePaddingBottom
                  id="client"
                  name="client"
                  label="Node Client"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  lightLabel
                  prominant
                  sMargin
                  largePaddingBottom
                  id="year"
                  name="year"
                  label="YEAR"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  lightLabel
                  prominant
                  sMargin
                  largePaddingBottom
                  id="make"
                  name="make"
                  label="MAKE"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-sm-4">
                <FancyInput
                  lightLabel
                  prominant
                  sMargin
                  largePaddingBottom
                  id="model"
                  name="model"
                  label="MODEL"
                  placeholder="Type a Valide VIN"
                />
              </div>
              <div className="col-12">
                <div className="fw-600 mt-2 mb-4">Attachments</div>
                <label
                  className="upload-label text-light-5 fw-300 text-manrope ps-4"
                  htmlFor="upload"
                >
                  Upload your attachment
                </label>
                <input type="file" id="upload" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProfile;
