import React, { useState } from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
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
      title="Services"
      activeLink={"inventory"}
      tabData={{
        img: true,
        tabLinks: true,
        tabGroupName: "finances-tabs",
        data: [
          {
            icon: "./assets/vectors/tab-inventory-services.svg",
            iconActive: "./assets/vectors/tab-inventory-services-active.svg",
            to: "/inventory",
          },
          {
            icon: "./assets/vectors/tab-inventory-articles.svg",
            iconActive: "./assets/vectors/tab-inventory-articles-active.svg",
            to: "/inventory-articles",
          },
        ],
      }}
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
            <div className="row py-4">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src="./assets/vectors/filter-contained.svg" alt="" />
              </div>
              <div className="col-11 col-md-4">
                <SearchInput placeholder="Search name" />
              </div>
              <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
                <AddBtn pale title="New" />
              </div>
            </div>
            <div className="table-wrapper short-vertical-scrollbar">
              <div className="table px-3">
                {servicesOfferData.map((data, idx) => {
                  return (
                    <div
                      key={"services-offer-data" + idx}
                      className="row my-2 align-items-center emboss-row py-3 mb-4 gx-0 services-offer-record"
                    >
                      <div className="col-3 d-flex gap-3 ps-4 align-items-center">
                        {/* <div className="box"></div> */}
                        {/* <input type="checkbox" name="" id="" /> */}
                        <label className="checkbox-container-5">
                          <input type="checkbox" />
                          <div className="checkmark"></div>
                        </label>
                        <div className="name text-poppins fw-500 fs-18">
                          {data.name}
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="complete-brake">
                          Complete brake Service
                        </div>
                      </div>
                      <div className="col-2 d-flex justify-content-center text-lato fw-400 fs-16">
                        {data.completeBrake} Variants
                      </div>
                      <div className="col-1 price fw-700">{data.price}$</div>
                      <div className="col-2">
                        <button
                          className="py-2 px-4"
                          onClick={() => {
                            setServiceBrakeSelected(true);
                          }}
                        >
                          Location
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
          </div>
        ) : (
          <div className="container-fluid service-brake">
            <div className="row pt-5 gx-sm-5">
              <div className="col-12 col-lg-7">
                <div className="emboss-white px-5 br-16 pt-2">
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
                </div>
                <div className="emboss-inner mt-5 br-16 px-5">
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
                </div>
                <div className="row gx-0 py-3">
                  <div className="col-12 d-flex justify-content-end mb-5">
                    <AddBtn
                      pale
                      onClick={() => modalOpenHandler(setArticleModalOpenState)}
                      title={"Add"}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-end mt-5"
                    onClick={() => setServiceBrakeSelected(false)}
                  >
                    <div className="btn btn-gradient">Save &amp; Return</div>
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
                        <div className="box emboss-inner br-16">
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
                        <div className="box emboss-inner br-16">
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
