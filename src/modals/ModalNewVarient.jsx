import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";
import AddBtn from "../components/AddBtn";

const ModalNewVarient = (props) => {
  return (
    <div>
      <Modal
        className="varient-modal"
        titleVector="./assets/vectors/modal-new-variant.svg"
        title="New variant"
        forText="Brake Change"
        buttonText="SAVE"
        {...props}
      >
        <div className="varient-modal-body">
          <div className="container-fluid px-0 pb-3">
            <div className="row gx-4">
              <div className="col">
                <FancyInput
                  prominant
                  rootClassName="my-0"
                  id="article"
                  name="Article"
                  label="Article"
                  placeholder="Start typeing..."
                />
              </div>
              <div className="col">
                <FancyInput
                  prominant
                  rootClassName="my-0"
                  id="make"
                  name="Make"
                  label="Make"
                  placeholder="Start typing..."
                />
              </div>
              <div className="col">
                <FancyInput
                  prominant
                  rootClassName="my-0"
                  id="model"
                  name="Model"
                  label="Model"
                  placeholder="Start typing..."
                />
              </div>
            </div>
          </div>

          <div className="item">
            <FancyInput
              embossed={false}
              prominant
              rootClassName="my-0"
              id="article"
              name="Article"
              label="Article"
              placeholder="Select an article"
            />
            <img src="./assets/vectors/right-arrow.svg" alt="right-arrow" />
            <FancyInput
              embossed={false}
              prominant
              rootClassName="replace-by my-0"
              id="sku"
              name="sku"
              label="SKU"
              placeholder="Replace by..."
            />
            <FancyInput
              embossed={false}
              prominant
              rootClassName="replace-by my-0"
              id="price"
              name="price"
              label="Price"
              placeholder="Type new price"
            />
          </div>
          <div className="item">
            <FancyInput
              embossed={false}
              prominant
              rootClassName="my-0"
              id="article"
              name="Article"
              label="Article"
              placeholder="Select an article"
            />
            <img src="./assets/vectors/right-arrow.svg" alt="right-arrow" />
            <FancyInput
              embossed={false}
              prominant
              rootClassName="replace-by my-0"
              id="sku"
              name="sku"
              label="SKU"
              placeholder="Replace by..."
            />
            <FancyInput
              embossed={false}
              prominant
              rootClassName="replace-by my-0"
              id="price"
              name="price"
              label="Price"
              placeholder="Type new price"
            />
          </div>

          <AddBtn pale small />
        </div>
      </Modal>
    </div>
  );
};

export default ModalNewVarient;
