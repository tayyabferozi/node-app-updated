import React from "react";

import Modal from "./Modal";
import AddBtn from "../components/AddBtn";
import FancyInput from "../components/FancyInput";

const ModalArticle = (props) => {
  return (
    <div>
      <Modal
        className="article-modal"
        title="Article"
        buttonText="Update list"
        {...props}
      >
        <div className="article-modal-body">
          <FancyInput
            prominant
            id="articleName"
            name="articleName"
            label="Article's name"
            placeholder="Start typing..."
          />

          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  id="serialNum"
                  name="serialNum"
                  label="Serial Number"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  id="availQuan"
                  name="availQuan"
                  label="Available quantity"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  id="price"
                  name="price"
                  label="Price"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  prominant
                  id="category"
                  name="category"
                  label="Category"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fw-600">Picture</div>
                  <AddBtn blue />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalArticle;
