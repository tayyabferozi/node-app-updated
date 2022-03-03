import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import TabContents from "../components/TabContents";
import TabContentItem from "../components/TabContentItem";
import AddBtn from "../components/AddBtn";
import ModalLifeActivity from "../modals/ModalLifeActivity";
import ModalOrder from "../modals/ModalOrder";

const ClientsList = () => {
  const [activityOpenState, setActivityOpenState] = useState(false);
  const [orderModalOpenState, setOrderModalOpenState] = useState(false);
  const [clientSelected, setClientSelected] = useState(false);
  const navigate = useNavigate();

  const modalOpenHandler = (func) => {
    func(true);
  };

  const modalCloseHandler = (func) => {
    func(false);
  };

  return (
    <MainLayout
      headVector="./assets/vectors/way-connect.svg"
      title="Users"
      lightBorder
      activeLink="connect"
      tabData={
        clientSelected && {
          img: true,
          tabGroupName: "client-overview-tabs",
          data: [
            {
              icon: "./assets/vectors/profile.svg",
              iconActive: "./assets/vectors/profile-active.svg",
              target: "profile",
              active: true,
            },
            {
              icon: "./assets/vectors/invoices.svg",
              iconActive: "./assets/vectors/invoices-active.svg",
              target: "invoices",
            },
            {
              icon: "./assets/vectors/requests.svg",
              iconActive: "./assets/vectors/requests-active.svg",
              target: "requests",
            },
          ],
        }
      }
    >
      <ModalLifeActivity
        isOpen={activityOpenState}
        modalCloseHandler={() => modalCloseHandler(setActivityOpenState)}
      />
      <ModalOrder
        isOpen={orderModalOpenState}
        modalCloseHandler={() => modalCloseHandler(setOrderModalOpenState)}
      />
      {clientSelected ? (
        <div id="client-overview-main-content" className="mt-4 mt-sm-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-9 col-sm-7 d-flex flex-column user-jumbotron-container">
                <div className="user-jumbotron-wrap flex-grow-1">
                  <div className="user-jumbotron h-100">
                    <div className="top d-flex align-items-start">
                      <img
                        src="./assets/vectors/lock-lg.svg"
                        className="lock me-2"
                        alt="lock"
                      />
                      <div className="text-blue text-manrope fs-10">
                        Unnode to edit Client
                      </div>
                    </div>
                    <div className="profile-info">
                      <div className="left">
                        <div className="img">
                          <img
                            src="./assets/img/clint-vector-lg.png"
                            alt="client-img"
                          />
                          <div className="badge">Noded</div>
                        </div>
                        <div className="social">
                          <button className="btn">
                            <img
                              src="./assets/vectors/fb-profile.svg"
                              alt="profile"
                            />
                          </button>
                          <button className="btn">
                            <img
                              src="./assets/vectors/pinterest-profile.svg"
                              alt="profile"
                            />
                          </button>
                          <button className="btn">
                            <img
                              src="./assets/vectors/linkedin-profile.svg"
                              alt="profile"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="right">
                        <div className="d-flex justify-content-start align-items-start flex-md-row flex-column justify-content-md-between">
                          <div>
                            <div className="user-name d-flex align-items-center">
                              <h4 className="evidence-word text-blue">
                                Bryandy Boyd
                              </h4>
                              <img
                                src="./assets/vectors/verified.svg"
                                className="ms-4"
                                alt="verified"
                              />
                            </div>
                            <div className="location">
                              <div className="text-manrope fw-400">
                                3452 av. de la Tour, Québec (QC) G1V 9J3 Canada
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              modalOpenHandler(setActivityOpenState)
                            }
                            className="btn btn-blue-high ms-md-4 ms-0 mt-md-0 mt-3"
                          >
                            Life Activity
                          </button>
                        </div>

                        <div className="container-fluid px-0 mt-4 pt-2">
                          <div className="row gx-0 gy-4">
                            <div className="col-md-8">
                              <div className="text-bold">
                                ernest.mason@gmail.com
                              </div>
                              <h5 className="sub-title text-light-2">Phone</h5>
                            </div>
                            <div className="col-md-4">
                              <div className="text-bold">561-303-6106</div>
                              <h5 className="sub-title text-light-2">Email</h5>
                            </div>
                            <div className="col-md-8">
                              <div className="row gy-4">
                                <div className="col-md-6">
                                  <div className="text-bold">09/02/1986</div>
                                  <h5 className="sub-title text-light-2">
                                    DOF
                                  </h5>
                                </div>
                                <div className="col-md-6">
                                  <div className="text-bold">Title</div>
                                  <h5 className="sub-title text-light-2">
                                    Cook
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-bold">Sexe</div>
                              <h5 className="sub-title text-light-2">Female</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-5 garage-specs-container">
                <div className="card garage-card">
                  <img src="./assets/vectors/garage.svg" alt="garage" />
                  <h3 className="section-title mt-2">Garage Specs</h3>
                  <div className="text-x-small mt-2 mb-3 desc-p">
                    Based on customer responses and Node's artificial
                    intelligence
                  </div>

                  <div className="section">
                    <div className="text-x-bold">A lot (50 000km) a year</div>
                    <div className="text-x-small">Travel</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">Countryside</div>
                    <div className="text-x-small">Reside</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">
                      Origin of the manufacturer
                    </div>
                    <div className="text-x-small">Preferred parts</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">6 times a year minimum</div>
                    <div className="text-x-small">Frequency</div>
                  </div>
                </div>
              </div>
              <div className="col-12"></div>
              <div className="col-12">
                <TabContents tabGroupName="client-overview-tabs mt-5">
                  <TabContentItem target="profile">
                    <div className="container-fluid px-0">
                      <div className="row gx-lg-5 gy-5">
                        <div className="col-lg-4">
                          <div className="last-work-orders">
                            <div className="d-flex justify-content-between title-container">
                              <div className="title">
                                <h3 className="section-title text-dark-1">
                                  Last Services Sheet
                                </h3>
                                <div className="title-label mt-1">
                                  Services &amp; Products
                                </div>
                              </div>
                              <AddBtn
                                onClick={() => navigate("/workshop-articles")}
                                title="NEW"
                                blue
                              />
                            </div>
                            <div className="emboss-white br-16">
                              <div className="listing-container short-vertical-scrollbar">
                                <div className="listing mt-3">
                                  {[
                                    {
                                      boxClr: "#ECA0A0",
                                      orderNum: "25062019-013",
                                      orderDate: "2021-10-22",
                                      orderPrice: "0.00",
                                    },
                                    {
                                      boxClr: "#D9CC9E",
                                      orderNum: "25062019-013",
                                      orderDate: "2021-10-22",
                                      orderPrice: "83.25",
                                    },
                                    {
                                      boxClr: "#7E8876",
                                      orderNum: "25062019-013",
                                      orderDate: "2021-10-22",
                                      orderPrice: "83.25",
                                    },
                                    {
                                      boxClr: "#7E8876",
                                      orderNum: "25062019-013",
                                      orderDate: "2021-10-22",
                                      orderPrice: "83.25",
                                    },
                                    {
                                      boxClr: "#7E8876",
                                      orderNum: "25062019-012",
                                      orderDate: "2020-08-03",
                                      orderPrice: "1064.83",
                                    },
                                    {
                                      boxClr: "#7E8876",
                                      orderNum: "25062019-013",
                                      orderDate: "2021-10-22",
                                      orderPrice: "83.25",
                                    },
                                  ].map((el, idx) => {
                                    const {
                                      orderNum,
                                      orderDate,
                                      orderPrice,
                                      boxClr,
                                    } = el;

                                    return (
                                      <div
                                        key={"order-list" + idx}
                                        className="list-item"
                                      >
                                        <div className="order-num d-flex align-items-center">
                                          <div
                                            className="round-box"
                                            style={{ backgroundColor: boxClr }}
                                          ></div>
                                          <div className="text-dark-2">
                                            {orderNum}
                                          </div>
                                        </div>
                                        <div className="order-date">
                                          <div className="text-light-4">
                                            {orderDate}
                                          </div>
                                        </div>
                                        <div className="order-price">
                                          <div className="">{orderPrice}$</div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 profiles-container">
                          <div className="d-flex justify-content-between title-container">
                            <div className="title">
                              <h3 className="section-title text-dark">
                                Profiles
                              </h3>
                              <div className="title-label mt-1">
                                Noded &amp; Internal
                              </div>
                            </div>
                            <AddBtn title="NEW" blue />
                          </div>

                          <div className="profiles-main emboss-white mt-3">
                            <div className="left">
                              {[
                                {
                                  active: true,
                                  vector:
                                    "./assets/vectors/toyota-prius-prime.svg",
                                  text1: "2020 Toyota Prius Prime",
                                  text2: "JFTK9887263312",
                                  text3: "Noded & Validated",
                                  noded: true,
                                },
                                {
                                  vector:
                                    "./assets/vectors/toyo-goodrich-2021.svg",
                                  text1: "Toyo GoodRich 2021",
                                  text2: "Need to be Validate",
                                  text3: "Add Serial Number to Validate",
                                },
                                {
                                  vector: "./assets/vectors/car-lock.svg",
                                  text1: "Car Lock",
                                  text3: "Internal Profile",
                                },
                                {
                                  vector: "./assets/vectors/car-lock.svg",
                                  text1: "Anti-starter lever",
                                  text3: "Internal Profile",
                                },
                              ].map((el, idx) => {
                                const {
                                  vector,
                                  text1,
                                  text2,
                                  text3,
                                  noded,
                                  vectorBg,
                                  active,
                                } = el;

                                return (
                                  <div
                                    key={"prod-list" + idx}
                                    className={clsx(
                                      "item br-10 d-flex align-items-center",
                                      { active },
                                      { "emboss-md-inner": active }
                                    )}
                                  >
                                    <div
                                      className="img"
                                      style={{ backgroundColor: vectorBg }}
                                    >
                                      <img src={vector} alt={text1} />
                                    </div>
                                    <div className="text">
                                      <div className="text-dark-3 fw-600">
                                        {text1}
                                      </div>
                                      <h5 className="sub-title">{text2}</h5>
                                      <div className="text-dark-3 fw-400 fs-7 text-manrope d-flex align-items-center">
                                        {text3}
                                        {noded && (
                                          <img
                                            className="ms-2"
                                            src="./assets/vectors/validated.svg"
                                            alt="validated"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="right">
                              <div className="head">
                                <div className="d-flex justify-content-between">
                                  <div className="fs-20 text-blue fw-200 text-manrope">
                                    Toyota Prius
                                  </div>
                                  <div
                                    className="d-flex align-items-start text-blue text-manrope fw-400 fs-12 me-sm-4"
                                    style={{ maxWidth: "70px" }}
                                  >
                                    <img
                                      className="mt-1 me-2"
                                      src="./assets/vectors/noded-blue.svg"
                                      alt="noded"
                                    />
                                    Noded &amp; Validated
                                  </div>
                                </div>
                                <div className="fs-10 text-xx-small">
                                  Client’s Attribute
                                </div>
                              </div>

                              <div className="body mt-2">
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Vehicle Serial Number (VIN)
                                  </div>
                                  <div className="text-dark-3 fw-600">
                                    JFTK9887263312
                                  </div>
                                </div>
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Official Name - Garage ecosystem
                                  </div>
                                  <div className="text-dark-3 fw-600">
                                    2020 Toyota Prius Prime LE HATCHBACK 4-DR
                                  </div>
                                </div>
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Engine
                                  </div>
                                  <div className="text-dark-3 fw-600">
                                    1.8L L4 DOHC 16V HYBRID
                                  </div>
                                </div>
                                <div className="container-fluid px-0">
                                  <div className="row">
                                    <div className="col-sm-4 col-6">
                                      <div className="section">
                                        <div className="text-light-5 text-manrope">
                                          Transmission
                                        </div>
                                        <div className="text-dark-3 fw-600">
                                          CVT
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4 col-6">
                                      <div className="section">
                                        <div className="text-light-5 text-manrope">
                                          Tires
                                        </div>
                                        <div className="text-dark-3 fw-600">
                                          P195/65R15
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4 col-6">
                                      <div className="section">
                                        <div className="text-light-5 text-manrope">
                                          Plate
                                        </div>
                                        <div className="text-dark-3 fw-600">
                                          M67 GDS
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="btns d-flex flex-wrap flex-column flex-sm-row mt-3">
                                <button className="btn btn-emboss m-2">
                                  Print Node QR
                                </button>
                                <button className="btn btn-emboss m-2">
                                  New Appointment
                                </button>
                                <button className="btn btn-emboss m-2">
                                  NodeConnect
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContentItem>
                  <TabContentItem target="invoices">
                    <div className="container-fluid p-0">
                      <div className="row gx-sm-5 gy-5">
                        <div className="col-lg-7 invoices-wrapper">
                          <div className="invoices-main">
                            <div className="d-flex justify-content-between title-container align-items-start">
                              <div className="title">
                                <h3 className="section-title">Invoices</h3>
                                <div className="title-label mt-1">
                                  Services &amp; Articles
                                </div>
                              </div>
                              <AddBtn blue title="NEW" />
                            </div>
                            <div className="emboss-white br-16">
                              <div className="listing-container">
                                <div className="listing">
                                  {[
                                    {
                                      orderNum: "78367492920",
                                      orderDate: "2021-10-22",
                                      price1: 230.1,
                                      price2: 230.1,
                                    },
                                    {
                                      orderNum: "78367492920",
                                      orderDate: "2021-10-22",
                                      price1: 230.1,
                                      price2: 230.1,
                                    },
                                    {
                                      boxClr: "#C26666",
                                      orderNum: "78367492920",
                                      orderDate: "2021-10-22",
                                      price1: 230.1,
                                      price2: 230.1,
                                    },
                                    {
                                      orderNum: "78367492920",
                                      orderDate: "2021-10-22",
                                      price1: 230.1,
                                      price2: 230.1,
                                    },
                                    {
                                      orderNum: "78367492920",
                                      orderDate: "2021-10-22",
                                      price1: 230.1,
                                      price2: 230.1,
                                    },
                                  ].map((el, idx) => {
                                    const {
                                      orderNum,
                                      orderDate,
                                      price1,
                                      price2,
                                      boxClr,
                                    } = el;

                                    return (
                                      <div
                                        className="list-item"
                                        key={"invoice-list" + idx}
                                      >
                                        <div className="order-num d-flex align-items-center">
                                          <div
                                            className="round-box"
                                            style={{
                                              backgroundColor:
                                                boxClr || "#7E8876",
                                            }}
                                          ></div>
                                          <div className="text-dark-2">
                                            {orderNum}
                                          </div>
                                        </div>
                                        <div className="order-date">
                                          <div className="text-light-4">
                                            {orderDate}
                                          </div>
                                        </div>
                                        <div className="order-price price-1">
                                          <div className="">{price1}$</div>
                                        </div>
                                        <div className="order-price">
                                          <div className="price-text">
                                            {price2}$
                                            {/* <div className="price-sign">
                                            <img
                                              src="./assets/vectors/dollar-sign.svg"
                                              alt="dollar"
                                            />
                                          </div> */}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="forms-main">
                            <div className="d-flex justify-content-between title-container">
                              <div className="title">
                                <h3 className="section-title">
                                  Forms &amp; Files
                                </h3>
                                <div className="title-label mt-1">
                                  All check responses
                                </div>
                              </div>
                              <AddBtn blue />
                            </div>
                            <div className="emboss-white br-16">
                              <div className="listing-container short-vertical-scrollbar">
                                <div className="listing">
                                  {[
                                    {
                                      label: "Inspection",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Note",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Brake Photo",
                                      name: "photo-brake.jpg",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Inspection",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Scratch",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Outside verification",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                    {
                                      label: "Note",
                                      name: "WO #893788784",
                                      date: "2021-10-22",
                                    },
                                  ].map((el, idx) => {
                                    const { label, name, date } = el;

                                    return (
                                      <div
                                        className="list-item"
                                        key={"ins" + idx}
                                      >
                                        <div className="label">
                                          <div className="text-dark-2">
                                            {label}
                                          </div>
                                        </div>
                                        <div className="name text-light-4">
                                          {name}
                                        </div>
                                        <div className="date">
                                          <div className="font-manrope text-end">
                                            {date}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContentItem>
                  <TabContentItem target="requests">
                    <div className="container-fluid px-0 ">
                      <div className="row">
                        <div className="col-lg-7 requests-container">
                          <div className="d-flex justify-content-between title-container">
                            <div className="title">
                              <h3 className="section-title">Requests</h3>
                              <div className="title-label mt-1">
                                Relating Client or Items Noded
                              </div>
                            </div>
                            <AddBtn blue title="NEW" />
                          </div>
                          <div className="emboss-white br-16">
                            <div className="requests-list-container short-vertical-scrollbar">
                              <div className="requests-list mt-4">
                                {[
                                  {
                                    incoming: true,
                                    titleText: "Appointment 12/01/2022",
                                    boxClr: "#5165F7",
                                    category: 3,
                                    date: "Due in 2 days",
                                  },
                                  {
                                    incoming: false,
                                    titleText: "Call To FLW UP",
                                    boxClr: "#5197F8",
                                    category: 3,
                                    date: "Due in 7 days",
                                  },
                                  {
                                    incoming: true,
                                    titleText: "Appointment 02/12/2021",
                                    boxClr: "#FA8036",
                                    category: 3,
                                    date: "Done 7 days ago",
                                  },
                                ].map((el, idx) => {
                                  const {
                                    titleText,
                                    date,
                                    category,
                                    incoming,
                                  } = el;

                                  return (
                                    <div
                                      className="requests-list-item c-pointer"
                                      key={"req-list" + idx}
                                      onClick={() =>
                                        modalOpenHandler(setOrderModalOpenState)
                                      }
                                    >
                                      <div className="mini-info">
                                        <img
                                          src={
                                            incoming
                                              ? "./assets/vectors/incoming-request.svg"
                                              : "./assets/vectors/outgoing-request.svg"
                                          }
                                          className="me-3"
                                          alt="request-accept"
                                        />
                                        <div className="text-dark-2">
                                          {titleText}
                                        </div>
                                      </div>
                                      <div className="more-info">
                                        <div className="todo d-flex align-items-center">
                                          <div
                                            className="round-box me-2"
                                            style={{
                                              backgroundColor: "#C26666",
                                            }}
                                          ></div>
                                          <div className="caption">To do</div>
                                        </div>
                                        <div className="prod-name">
                                          <h5 className="sub-title">
                                            Category {category}
                                          </h5>
                                        </div>
                                        <div className="date">
                                          <h5 className="sub-title">{date}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 interactions-container mt-lg-0 mt-5">
                          <div className="d-flex justify-content-between title-container">
                            <div className="title">
                              <h3 className="section-title">Interactions</h3>
                              <div className="title-label mt-1">
                                Relating Client or Items Noded
                              </div>
                            </div>
                          </div>
                          <div className="emboss-white br-16">
                            <div className="listing-container interactions-container short-vertical-scrollbar">
                              <div className="listing mt-4">
                                {[
                                  {
                                    titleText: "Email",
                                    date: "21 Sep 2021",
                                  },
                                  {
                                    titleText: "Phone",
                                    time: "00:01:32",
                                    date: "21 Sep 2021",
                                  },
                                ].map((el, idx) => {
                                  const { titleText, date, time } = el;

                                  return (
                                    <div
                                      className="list-item"
                                      key={"req-list" + idx}
                                    >
                                      <div className="text-dark-2">
                                        {titleText}
                                      </div>
                                      <div className="time">
                                        <h5 className="sub-title">{time}</h5>
                                      </div>
                                      <div className="date">
                                        <h5 className="sub-title">{date}</h5>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContentItem>
                </TabContents>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="client-list-main-content">
          <div className="container-fluid mt-3">
            <div className="row g-3 mt-3">
              {[
                {
                  img: "./assets/img/client-vector-1.png",
                  name: "Libre Baskerville",
                  visits: 4,
                  email: "ernest.mason@gmail.com",
                  phone: "561-303-6106",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-vector-2.png",
                  name: "Bradley Malone",
                  visits: 0,
                  email: "bradley.m@gmail.com",
                  phone: "bradley.m@gmail.com",
                  noded: false,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-vector-3.png",
                  name: "Janie Todd",
                  visits: 19,
                  email: "stroman.hanna@yahoo.com",
                  phone: "467-624-8505",
                  noded: false,
                  avatarBg: "linear-gradient(0deg, #4ACBD3, #4ACBD3)",
                },
                {
                  img: "./assets/img/client-vector-4.png",
                  name: "Marvin Lambert",
                  visits: 291,
                  email: "micaela.okuneva@zemlak.biz",
                  phone: "716-937-5782",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-vector-5.png",
                  name: "Teresa Lloyd",
                  visits: 13,
                  email: "carlee_erdman@gmail.com",
                  phone: "496-144-8261",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-vector-6.png",
                  name: "Fred Haynes",
                  visits: 102,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123 ",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-vector-7.png",
                  name: "Fred Haynes",
                  visits: 8,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123",
                  noded: false,
                  avatarBg: "linear-gradient(0deg, #4ACBD3, #4ACBD3)",
                },
                {
                  img: "./assets/img/client-vector-8.png",
                  name: "Rose Peters",
                  visits: 29,
                  email: "oma.russel@hotmail.com",
                  phone: "828-963-3958",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-vector-5.png",
                  name: "Teresa Lloyd",
                  visits: 13,
                  email: "carlee_erdman@gmail.com",
                  phone: "496-144-8261",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-vector-6.png",
                  name: "Fred Haynes",
                  visits: 102,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123 ",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-vector-7.png",
                  name: "Fred Haynes",
                  visits: 8,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123",
                  noded: false,
                  avatarBg: "linear-gradient(0deg, #4ACBD3, #4ACBD3)",
                },
                {
                  img: "./assets/img/client-vector-8.png",
                  name: "Rose Peters",
                  visits: 29,
                  email: "oma.russel@hotmail.com",
                  phone: "828-963-3958",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
              ].map((el, idx) => {
                const { img, name, visits, email, phone, avatarBg } = el;

                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                    key={"client-list" + idx}
                  >
                    <ClientCard
                      setClientSelected={setClientSelected}
                      img={img}
                      name={name}
                      visits={visits}
                      email={email}
                      phone={phone}
                      avatarBg={avatarBg}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ClientsList;

const ClientCard = ({
  img,
  name,
  visits,
  email,
  phone,
  avatarBg,
  noded,
  setClientSelected,
}) => {
  return (
    <div
      className="client-card emboss-md"
      onClick={() => setClientSelected(true)}
    >
      <div className="head">
        <div className="img" style={{ background: avatarBg }}>
          <img src={img} alt={name} />
        </div>
        <div className="text">
          <h3 className="section-title">{name}</h3>
          <div className="text-small">
            {visits} visit{visits > 1 && "s"}
          </div>
        </div>
      </div>
      <div className="body">
        <div className="section">
          <div className="text-small">Email</div>
          <div className="text-dark-4 fw-600">{email}</div>
        </div>
        <div className="section">
          <div className="text-small">Phone</div>
          <div className="text-dark-4 fw-600">{phone}</div>
        </div>
        <div className="section noded">
          {noded && <button className="btn btn-vert">Noded</button>}
        </div>
      </div>
    </div>
  );
};
