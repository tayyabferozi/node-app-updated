import React, { useState } from "react";

import FancyInput from "../components/FancyInput";
import AddBtn from "../components/AddBtn";
import Input from "../components/Input";
import TabContents from "../components/TabContents";
import TabContentItem from "../components/TabContentItem";
import Tabs from "../components/Tabs";
import WorkshopWorkorderLayout from "../layouts/WorkshopWorkorderLayout";
import ModalOrder from "../modals/ModalOrder";
import ModalArticle from "../modals/ModalArticle";
import Accordion from "../components/Accordion";

const WorkshopArticles = () => {
  const [orderModalOpenState, setOrderModalOpenState] = useState(false);
  const [articleModalOpenState, setArticleModalOpenState] = useState(false);

  const [formState, setFormState] = useState({
    name1: "Front Pad",
    sku1: "873244424343-32",
    quantity1: 2,
    availability1: 76,
    unitPrice1: "20.00$",
    categorie1: "BRAKE",
    name2: "Front Brake Change with OP",
    sku2: "L-FBC-OP",
    quantity2: 1,
    availability2: "NA",
    unitPrice2: "47.00$",
    categorie2: "LABOR",
  });

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };

  const modalOpenHandler = (func) => {
    func(true);
  };

  const modalCloseHandler = (func) => {
    func(false);
  };
  return (
    <WorkshopWorkorderLayout title="Details">
      <ModalOrder
        isOpen={orderModalOpenState}
        modalCloseHandler={() => modalCloseHandler(setOrderModalOpenState)}
      />
      <ModalArticle
        isOpen={articleModalOpenState}
        modalCloseHandler={() => modalCloseHandler(setArticleModalOpenState)}
      />

      <TabContents tabGroupName="workshop-articles-tabs">
        <TabContentItem target="forms">
          <div className="container-fluid px-0 mt-4">
            <div className="row gy-5">
              <div className="col-md-6">
                <div className="d-flex flex-wrap justify-content-between title-container px-3">
                  <div className="title me-4 pb-3">
                    <h3 className="section-title text-dark-1 d-flex align-items-center">
                      <img
                        className="me-3"
                        src="./assets/vectors/forms.svg"
                        alt="forms"
                      />
                      Forms
                    </h3>
                  </div>
                  <AddBtn
                    onClick={() => modalOpenHandler(setOrderModalOpenState)}
                    title="NEW"
                    pale
                  />
                </div>
                <div className="files forms emboss-white br-16">
                  <div className="file-item">
                    <div className="bg">
                      <img src="./assets/vectors/!.svg" alt="exclamation" />
                    </div>
                    <div className="text">Inspection</div>
                  </div>
                  <div className="file-item">
                    <div className="bg">
                      <img src="./assets/vectors/tick.svg" alt="exclamation" />
                    </div>
                    <div className="text">Brake Check</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-wrap justify-content-between title-container px-3">
                  <div className="title me-4 pb-3">
                    <h3 className="section-title text-dark-1 d-flex align-items-center">
                      <img
                        className="me-3"
                        src="./assets/vectors/files.svg"
                        alt="files"
                      />
                      Files
                    </h3>
                  </div>
                  <AddBtn pale />
                </div>

                <div className="files img emboss-white br-16">
                  <div className="file-item">
                    <img
                      src="./assets/vectors/file-img-placeholder.svg"
                      alt="exclamation"
                    />
                    <div className="text">Rear Scratch</div>
                  </div>
                  <div className="file-item">
                    <img
                      src="./assets/vectors/file-img-placeholder.svg"
                      alt="exclamation"
                    />
                    <div className="text">Brake Check</div>
                  </div>
                  <div className="file-item">
                    <img
                      src="./assets/vectors/file-img-placeholder.svg"
                      alt="exclamation"
                    />
                    <div className="text">Door lock</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between title-container mt-5">
            <div className="title">
              <h3 className="section-title text-dark-1 d-flex align-items-center">
                <img
                  className="me-3"
                  src="./assets/vectors/requests-dark.svg"
                  alt="requests"
                />
                Requests
              </h3>
            </div>
          </div>

          <div className="mt-3 br-16 emboss-white px-3 py-4">
            <div className="table-container">
              <table style={{ minWidth: 500 }}>
                <tr>
                  <td style={{ width: "35%" }}>Order Rear Light</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="round-box me-2"
                        style={{ backgroundColor: "#C26666" }}
                      ></div>
                      <span className="text-red">To Do</span>
                    </div>
                  </td>
                  <td>Categorie 3</td>
                  <td>21 Sep 2021</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="d-flex justify-content-between title-container mt-5">
            <div className="title">
              <h3 className="section-title text-dark-1 d-flex align-items-center">
                <img
                  className="me-3"
                  src="./assets/vectors/notes.svg"
                  alt="notes"
                />
                Notes
              </h3>
            </div>
          </div>

          <div className="mt-3 br-16 emboss-white px-3 py-4">
            <div className="fs-10 text-manrope text-light-7">Internal Note</div>
            <Input
              rootClassName="mt-2"
              value="The best study I could find found nothing particularly Another small study looked at sedentary individuals without diabetes who were overweight or obese."
              textArea
              rows={3}
            />
            <div className="mt-4 fs-10 text-manrope text-light-7">
              Public Note
            </div>
            <Input
              rootClassName="mt-2"
              value="Is there any evidence of benefit if people without diabetes monitor their blood sugar levels with CGMs? There’s little published research to help answer this question."
              textArea
              rows={4}
            />

            {/* <div className="d-flex justify-content-end mt-5">
              <button className="btn btn-blue btn-rounded">
                Convert to Invoice
                <img
                  className="ms-3"
                  src="./assets/vectors/r-arrow-btn.svg"
                  alt="right-arrow"
                />
              </button>
            </div> */}
          </div>
        </TabContentItem>
        <TabContentItem target="articles">
          <div className="d-flex justify-content-end mt-4 mb-3">
            <AddBtn
              onClick={() => modalOpenHandler(setArticleModalOpenState)}
              pale
            />
          </div>
          <div className="collapses-container">
            <div className="collapse">
              <Accordion
                headComp={
                  <div className="head">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Service: Front Back Change
                    </div>

                    <div className="options">
                      <div className="btn p-0">
                        <img src="./assets/vectors/bin-1.svg" alt="bin" />
                      </div>
                      <div className="btn p-0">
                        <img
                          className="arrow"
                          src="./assets/vectors/arrow-down-1.svg"
                          alt="arrow-down"
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="body">
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="name1"
                            name="name1"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.name1}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku1"
                            name="sku1"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity1"
                            name="quantity1"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability1"
                            name="availability1"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice1"
                            name="unitPrice1"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie1"
                            name="categorie1"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="categorie2"
                            name="categorie2"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku2"
                            name="sku2"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity2"
                            name="quantity2"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability2"
                            name="availability2"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice2"
                            name="unitPrice2"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie2"
                            name="categorie2"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="collapse">
              <Accordion
                headComp={
                  <div className="head">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Unit : Oil - (1L) 5W30 Syn.
                    </div>

                    <div className="options">
                      <div className="btn p-0">
                        <img src="./assets/vectors/bin-1.svg" alt="bin" />
                      </div>
                      <div className="btn p-0">
                        <img
                          className="arrow"
                          src="./assets/vectors/arrow-down-1.svg"
                          alt="arrow-down"
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="body">
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="name1"
                            name="name1"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.name1}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku1"
                            name="sku1"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity1"
                            name="quantity1"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability1"
                            name="availability1"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice1"
                            name="unitPrice1"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie1"
                            name="categorie1"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="categorie2"
                            name="categorie2"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku2"
                            name="sku2"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity2"
                            name="quantity2"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability2"
                            name="availability2"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice2"
                            name="unitPrice2"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie2"
                            name="categorie2"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="collapse">
              <Accordion
                headComp={
                  <div className="head">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Unit : 7C Battery
                    </div>

                    <div className="options">
                      <div className="btn p-0">
                        <img src="./assets/vectors/bin-1.svg" alt="bin" />
                      </div>
                      <div className="btn p-0">
                        <img
                          className="arrow"
                          src="./assets/vectors/arrow-down-1.svg"
                          alt="arrow-down"
                        />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="body">
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="name1"
                            name="name1"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.name1}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku1"
                            name="sku1"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity1"
                            name="quantity1"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability1"
                            name="availability1"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice1"
                            name="unitPrice1"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice1}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie1"
                            name="categorie1"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-section">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            icon="vectors/cart.svg"
                            prominantBlue
                            mdPaddingBottom
                            sMargin
                            label="&nbsp;"
                            id="categorie2"
                            name="categorie2"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                        <div className="col-6">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="sku2"
                            name="sku2"
                            label="SKU"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.sku2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="quantity2"
                            name="quantity2"
                            label="Quantity"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.quantity2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="availability2"
                            name="availability2"
                            label="Availability"
                            placeholder="Start typing..."
                            disabled
                            onChange={formChangeHandler}
                            value={formState.availability2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="unitPrice2"
                            name="unitPrice2"
                            label="Unit Price"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.unitPrice2}
                          />
                        </div>
                        <div className="col-6 col-sm-3">
                          <FancyInput
                            embossed={false}
                            prominant
                            lightLabel
                            thinlabel
                            mdPaddingBottom
                            sMargin
                            id="categorie2"
                            name="categorie2"
                            label="Categorie"
                            placeholder="Start typing..."
                            onChange={formChangeHandler}
                            value={formState.categorie2}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
            {/* <div className="collapse closed">
              <div className="head">
                <div className="text">Service : Front Brake Change</div>
                <div className="options">
                  <div className="btn p-0">
                    <img src="./assets/vectors/bin-1.svg" alt="bin" />
                  </div>
                  <div className="btn p-0">
                    <img
                      src="./assets/vectors/arrow-down-1.svg"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div><div className="collapse closed">
              <div className="head">
                <div className="text">Service : Front Brake Change</div>
                <div className="options">
                  <div className="btn p-0">
                    <img src="./assets/vectors/bin-1.svg" alt="bin" />
                  </div>
                  <div className="btn p-0">
                    <img
                      src="./assets/vectors/arrow-down-1.svg"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="d-flex justify-content-end mt-4 mb-3">
            <button className="btn text-white btn-gradient">
              Convert to Invoice
              <img
                className="ms-3"
                src="./assets/vectors/r-arrow-btn.svg"
                alt="right-arrow"
              />
            </button>
          </div>
        </TabContentItem>
        <TabContentItem target="partners">
          <h3 className="section-title">Partners</h3>

          <div className="continer-fluid px-0 mt-4">
            <div className="row g-4">
              {[
                { img: "./assets/img/partner-1.png", maxWidth: 79 },
                { img: "./assets/img/partner-2.png", maxWidth: 153 },
                { img: "./assets/img/partner-3.png", maxWidth: 100 },
                { img: "./assets/img/partner-4.png", maxWidth: 190 },
                { img: "./assets/img/partner-5.png", maxWidth: 120 },
              ].map((el, idx) => {
                const { img, maxWidth } = el;

                return (
                  <div
                    key={"partner" + idx}
                    className="col-md-4 col-sm-6 col-12"
                  >
                    <div className="br-16 h-100 d-flex justify-content-center align-items-center p-5 py-4 emboss-white">
                      <img
                        className="w-100"
                        src={img}
                        alt="partner"
                        style={{ maxWidth }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabContentItem>
      </TabContents>
    </WorkshopWorkorderLayout>
  );
};

export default WorkshopArticles;
