import React, { useState } from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import TabContentItem from "../components/TabContentItem";
import TabContents from "../components/TabContents";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";
import ModalArticle from "../modals/ModalArticle";
import ModalForm from "../modals/ModalForm";
import ModalNewVarient from "../modals/ModalNewVarient";
import ModalSchedule from "../modals/ModalSchedule";

const servicesOfferData = [
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
];

const inventoryData = [
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: true,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: false,
    isChecked: true,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: false,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
];

const Inventory = () => {
  const [articleModalOpenState, setArticleModalOpenState] = useState(false);
  const [variantModalOpenState, setVariantModalOpenState] = useState(false);
  const [formModalOpenState, setFormModalOpenState] = useState(false);
  const [scheduleModalOpenState, setScheduleModalOpenState] = useState(false);
  const [serviceBrakeSelected, setServiceBrakeSelected] = useState(false);

  const modalOpenHandler = (func) => {
    func(true);
  };

  const modalCloseHandler = (func) => {
    func(false);
  };

  return (
    <MainLayout
      headVector="./assets/vectors/inventory.svg"
      sideNavVector="./assets/vectors/sidenav-right-8.svg"
      title="inventory"
    >
      <div id="inventory-main-content">
        <ModalArticle
          isOpen={articleModalOpenState}
          modalCloseHandler={() => modalCloseHandler(setArticleModalOpenState)}
        />
        <ModalNewVarient
          isOpen={variantModalOpenState}
          modalCloseHandler={() => modalCloseHandler(setVariantModalOpenState)}
        />
        <ModalForm
          isOpen={formModalOpenState}
          modalCloseHandler={() => modalCloseHandler(setFormModalOpenState)}
        />
        <ModalSchedule
          isOpen={scheduleModalOpenState}
          modalCloseHandler={() => modalCloseHandler(setScheduleModalOpenState)}
        />
        {!serviceBrakeSelected ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Tabs
                  className="mt-4 flex-column flex-sm-row w-100"
                  tabGroupName="inventory-tabs"
                  data={[
                    {
                      icon: "./assets/vectors/mail.svg",
                      label: "Articles",
                      target: "articles",
                      active: true,
                    },
                    {
                      icon: "./assets/vectors/invoices.svg",
                      label: "Services Offer",
                      target: "services-offer",
                      // active: true,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="row py-4">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src="./assets/vectors/filter-contained.svg" alt="" />
              </div>
              <div className="col-11 col-md-4">
                <SearchInput placeholder="Search by Name or SKU" />
              </div>
              <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
                <AddBtn blue title="New" />
              </div>
            </div>
            <TabContents tabGroupName="inventory-tabs">
              <TabContentItem target="services-offer">
                <div className="table-wrapper short-vertical-scrollbar">
                  <div className="table">
                    {servicesOfferData.map((data, idx) => {
                      return (
                        <div
                          key={"services-offer-data" + idx}
                          className="row my-2 align-items-center py-3 gx-0 services-offer-record"
                        >
                          <div className="col-4 d-flex gap-3 ps-4 align-items-center">
                            {/* <div className="box"></div> */}
                            {/* <input type="checkbox" name="" id="" /> */}
                            <label className="checkbox-container-5">
                              <input type="checkbox" />
                              <div className="checkmark"></div>
                            </label>
                            <div className="name">{data.name}</div>
                          </div>
                          <div className="col-4">
                            <div className="complete-brake">
                              Complete brake...{" "}
                              <span className="px-4">{data.completeBrake}</span>
                            </div>
                          </div>
                          <div className="col-1 price">{data.price}$</div>
                          <div className="col-2">
                            <button className="py-2 px-4">
                              {data.isLocation ? "Location" : "Recurring"}
                            </button>
                          </div>
                          <div className="col-1 d-flex justify-content-center align-items-center">
                            <div className="services-offer-menu">
                              <img src="./assets/vectors/delete.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex flex-column align-items-center py-3">
                    <img
                      width={10}
                      src="./assets/vectors/scroll-down-arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </TabContentItem>
              <TabContentItem target="articles">
                <div className="table-wrapper short-vertical-scrollbar">
                  <div className="table">
                    {inventoryData.map((data, idx) => {
                      return (
                        <div
                          key={"articles" + idx}
                          className={`row my-2 p-3 gx-0 align-items-center inventory-record ${
                            data.isChecked ? "checked" : ""
                          }`}
                        >
                          <div className="col-5 d-flex align-items-center ps-2 gap-4 info">
                            {/* <div className="checkbox">
                              <input
                                type="checkbox"
                                checked={data.isChecked}
                                onChange={() => {}}
                                name=""
                                id=""
                              />
                            </div> */}

                            <label className="checkbox-container-5">
                              <input type="checkbox" />
                              <div className="checkmark"></div>
                            </label>
                            <img src="./assets/img/inventory-1.png" alt="" />
                            <div className="name">
                              <div
                                className="title c-pointer"
                                onClick={() =>
                                  modalOpenHandler(setArticleModalOpenState)
                                }
                              >
                                {data.name}
                              </div>
                              <div className="caption text-light-5">
                                {data.number}
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="quantity">
                              {data.quantity.toLocaleString()}
                              <div>Qty.</div>
                            </div>
                          </div>
                          <div className="col-1">
                            <div className="price">
                              {data.price}$<div>Price</div>
                            </div>
                          </div>
                          <div className="col-2 d-flex justify-content-center align-items-center">
                            <button
                              onClick={() => setServiceBrakeSelected(true)}
                              className={`${
                                data.isBrake ? "is-brake" : "is-engine"
                              }  py-2 px-5`}
                            >
                              {data.isBrake ? "Brake" : "Engine"}
                            </button>
                          </div>
                          <div className="col-1 d-flex justify-content-center align-items-center">
                            <div className="inventory-menu">
                              <img src="./assets/vectors/delete.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex flex-column align-items-center py-3">
                    <img
                      width={10}
                      src="./assets/vectors/scroll-down-arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </TabContentItem>
            </TabContents>
          </div>
        ) : (
          <div className="container-fluid service-brake">
            <div className="row pt-5 gx-sm-5">
              <div className="col-12 col-lg-7 pt-2 pe-3">
                <div className="row gx-0">
                  <div className="col-12 d-flex justify-content-between flex-sm-row flex-column align-items-sm-center align-items-start py-3 title">
                    <div className="service-brake-text">Service Brake</div>
                    <label class="checkbox-container-5">
                      Available To Book
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Default Location
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-3"
                          type="text"
                          value="Select Location"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-6">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Price
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              value="1900"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Duration
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              value="19 min."
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Category
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-3"
                          type="text"
                          value="Select Category"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                        <div className="fs-14 text-dark-3 fw-600 text-poppins pb-2">
                          Add Variant
                        </div>
                        <div
                          onClick={() =>
                            modalOpenHandler(setVariantModalOpenState)
                          }
                          className="rounded c-pointer d-flex justify-content-center align-items-center fs-16 text-manrope fw-600 box"
                        >
                          +
                        </div>
                      </div>
                      <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                        <div className="fs-14 text-dark-3 fw-600 text-poppins pb-2">
                          Node Form
                        </div>
                        <div
                          onClick={() =>
                            modalOpenHandler(setFormModalOpenState)
                          }
                          className="rounded c-pointer d-flex justify-content-center align-items-center fs-16 text-manrope fw-600 box"
                        >
                          +
                        </div>
                      </div>
                      <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                        <div className="fs-14 text-dark-3 fw-600 text-poppins pb-2">
                          Schedule
                        </div>
                        <div
                          onClick={() =>
                            modalOpenHandler(setScheduleModalOpenState)
                          }
                          className="rounded c-pointer d-flex justify-content-center align-items-center fs-16 text-manrope fw-600 box"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Type Of Service
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-3"
                          type="text"
                          value="Select Category"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-8">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Start &amp; End Date
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              value="20-12-2022 to 22-12-2022"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Capacity
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              value="10"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Add Article
                      </label>
                      <div className="input">
                        <img
                          className="icon"
                          src="./assets/vectors/add-basket.svg"
                          alt=""
                        />
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-2 ps-5 text-blue"
                          type="text"
                          value="Right Rear Light"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        SKU
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-2"
                          type="text"
                          value="98736446237234-23"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Quantity
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              value="2"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="custom-form-control my-3">
                          <label className="text-light-5 fs-14" htmlFor="">
                            Amount
                          </label>
                          <div className="input">
                            <input
                              className="text-dark-3 fs-14 pt-2 pb-3"
                              type="text"
                              placeholder="37"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Unit Price
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-3"
                          type="text"
                          value="37.00$"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="custom-form-control my-3">
                      <label className="text-light-5 fs-14" htmlFor="">
                        Categorie
                      </label>
                      <div className="input">
                        <input
                          className="text-dark-3 fs-14 pt-2 pb-3"
                          type="text"
                          value="LIGHT"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-0 py-3">
                  <div className="col-12 d-flex gap-3">
                    <button
                      className={`btn btn-add`}
                      onClick={() => modalOpenHandler(setArticleModalOpenState)}
                    >
                      Add Article
                    </button>
                    <button
                      onClick={() => setServiceBrakeSelected(false)}
                      className={`btn blue`}
                    >
                      Save &amp; Return
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-0 col-lg-1"></div>
              <div className="col-12 col-lg-4 custom-border custom-rounded service-details">
                <div className="row g-3 py-4 gap-3">
                  <div className="col-12">
                    <h3 className="service-details-text pt-3 pb-2 section-title">
                      Service Details
                    </h3>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-11 d-flex align-items-start gap-3">
                        <div className="box">
                          <img src="./assets/vectors/vehicle.svg" alt="" />
                        </div>
                        <div>
                          <div className="title text-dark-3 text-bold fs-14 pt-1">
                            Right Rear Light
                          </div>
                          <div className="sub text-light-5 fs-12 ">
                            89632472346727834-23
                          </div>
                        </div>
                      </div>
                      <div className="col-1 d-flex align-items-center text-blue text-bold">
                        x2
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-11 d-flex align-items-start gap-3">
                        <div className="box">
                          <img src="./assets/vectors/vehicle.svg" alt="" />
                        </div>
                        <div>
                          <div className="title text-dark-3 text-bold fs-14 pt-1">
                            Filter
                          </div>
                          <div className="sub text-light-5 fs-12 ">
                            B-7C-9762
                          </div>
                        </div>
                      </div>
                      <div className="col-1 d-flex align-items-center text-blue text-bold">
                        x1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Inventory;
