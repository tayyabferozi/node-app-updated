import React from "react";

import Modal from "./Modal";
import AddBtn from "../components/AddBtn";
import FancyInput from "../components/FancyInput";

const ModalArticle = (props) => {
  return (
    <div>
      <Modal
        className="article-modal"
        titleVector="./assets/vectors/modal-article.svg"
        title="Article"
        buttonText="SAVE"
        {...props}
      >
        <div className="article-modal-body">
          <FancyInput
            sMargin
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
                  sMargin
                  prominant
                  id="sku"
                  name="sku"
                  label="SKU"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  sMargin
                  prominant
                  id="availQuan"
                  name="availQuan"
                  label="Available quantity"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  sMargin
                  prominant
                  id="price"
                  name="price"
                  label="Price"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  sMargin
                  prominant
                  id="category"
                  name="category"
                  label="Category"
                  placeholder="Select category"
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  sMargin
                  prominant
                  id="waranty"
                  name="waranty"
                  label="Waranty"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col-sm-6">
                <FancyInput
                  sMargin
                  prominant
                  id="dimensions"
                  name="dimensions"
                  label="Dimensions (W x H x L)"
                  placeholder="Select category"
                />
              </div>
              <div className="col-sm-12">
                <div className="d-flex align-items-start ">
                  <FancyInput
                    sMargin
                    rootStyle={{ width: "75%" }}
                    prominant
                    type="file"
                    id="upload"
                    name="model"
                    label="Attachments"
                    label2="Upload your picture"
                    placeholder="Type a Valide VIN"
                  />
                  <AddBtn className="ms-4 mt-4" small blue />
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
