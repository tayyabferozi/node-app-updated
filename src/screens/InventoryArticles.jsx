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
      title="Inventory"
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
      <div id="inventory-articles-main-content">
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
        <div className="container-fluid">
          <div className="row py-4">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <img src="./assets/vectors/filter-contained.svg" alt="" />
            </div>
            <div className="col-11 col-md-4">
              <SearchInput placeholder="Search by Name or SKU" />
            </div>
            <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
              <AddBtn pale title="New" />
            </div>
          </div>
          <div className="table-wrapper short-vertical-scrollbar">
            <div className="table px-3">
              {inventoryData.map((data, idx) => {
                return (
                  <div
                    key={"articles" + idx}
                    className={`row my-2 emboss-row mb-4 p-3 gx-0 align-items-center inventory-record ${data.isChecked ? "checked" : ""
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
                        className={`${data.isBrake ? "is-brake" : "is-engine"
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Inventory;
