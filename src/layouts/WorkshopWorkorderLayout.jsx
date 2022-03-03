import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Tabs from "../components/Tabs";

import $ from "jquery";
import SearchInput from "../components/SearchInput";
import ModalScan from "../modals/ModalScan";

const navItems = [
  {
    link: "/360",
    title: "360",
    vector: "./assets/vectors/360.svg",
    animFile: "../animations/animation_kybu5p0h.json",
  },
  {
    link: "/conversations",
    title: "desk",
    vector: "./assets/vectors/desk.svg",
    animFile: "../animations/animation_kyc2cdig.json",
  },
  {
    link: "/way",
    title: "way",
    vector: "./assets/vectors/way.svg",
    animFile: "../animations/animation_kyc25zsj.json",
  },
  {
    link: "/finances-overview",
    title: "wallet",
    vector: "./assets/vectors/wallet.svg",
    animFile: "../animations/animation_kyc27m1g.json",
  },
  {
    link: "/inventory",
    title: "inventory",
    vector: "./assets/vectors/inventory.svg",
    animFile: "../animations/animation_kyc28kpf.json",
  },
  {
    link: "/workshop-realtime",
    title: "workshop",
    vector: "./assets/vectors/workshop.svg",
    animFile: "../animations/animation_kyc29iw0.json",
  },
];

const tabData = {
  img: true,
  groupName: "workshop-articles-tabs",
  changeTitle: true,
  tabs: [
    {
      icon: "./assets/vectors/workshop-articles.svg",
      iconActive: "./assets/vectors/workshop-articles-active.svg",
      target: "forms",
      active: true,
      title: "Details",
    },
    {
      icon: "./assets/vectors/workshop-services.svg",
      iconActive: "./assets/vectors/workshop-services-active.svg",
      target: "articles",
      title: "Service Sheet",
    },
    {
      icon: "./assets/vectors/workshop-partner.svg",
      iconActive: "./assets/vectors/workshop-partner-active.svg",
      target: "partners",
      title: "Connectors",
    },
  ],
};

const WorkshopWorkorderLayout = ({
  activeLink = "workshop",
  contentClassName,
  children,
  title,
}) => {
  const itemsRef = useRef([]);
  const itemContainersRef = useRef([]);
  const [scanModalOpenState, setScanModalOpenState] = useState(false);

  const modalOpenHandler = (func) => {
    func(true);
  };

  const modalCloseHandler = (func) => {
    func(false);
  };

  const toggleSideNav = () => {
    $("#sidenav").toggleClass("active");
    $(".dark-overlay.overlay-sidenav").toggleClass("active");
  };

  return (
    <div id="workshop-workorder-layout">
      <ModalScan
        isOpen={scanModalOpenState}
        modalCloseHandler={() => modalCloseHandler(setScanModalOpenState)}
      />
      <div className="head">
        <div className="sidemenu">
          <h3 className="d-none d-sm-flex">
            <img
              src="./assets/vectors/menu-outline.svg"
              className="me-3"
              alt="menu"
            />
            menu
          </h3>
          <div className="sidemenu-nav">
            {navItems.map((el, idx) => {
              const { link, title } = el;
              return (
                <Link
                  ref={(el) => {
                    itemContainersRef.current[idx] = el;
                  }}
                  key={"nav-item" + idx}
                  to={link}
                  className="item"
                >
                  <div
                    className="img"
                    ref={(el) => (itemsRef.current[idx] = el)}
                  >
                    {/* <img src={vector} alt={title} /> */}
                  </div>
                  <div className="text">{title}</div>
                </Link>
              );
            })}
          </div>
          <div className="options">
            <div className="d-flex flex-column justify-content-center me-2 me-sm-4">
              <Link to="/settings" className="text">
                Logout
              </Link>
              <Link to="/settings" className="text">
                Settings
              </Link>
            </div>
            <button
              className="btn d-flex align-items-center"
              // onClick={toggleTopMenu}
            >
              <img src="./assets/vectors/sidemenu-close.svg" alt="close" />
            </button>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div
            className="d-flex flex-column align-items-center pt-2"
            id="title-container"
          >
            <Link to="/360">
              <img
                className="logo"
                src="./assets/vectors/logo-new.svg"
                alt="logo"
              />
            </Link>
            <div className="mt-2 text-center fw-500" id="side-main-title">
              {title}
            </div>
          </div>
          <div className="page-heading d-flex">
            <img
              className="me-lg-5 me-4 hamburger d-1300-none"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
              onClick={toggleSideNav}
            />

            {tabData && (
              <Tabs
                tabGroupName={tabData.groupName}
                data={tabData.tabs}
                img={tabData.img}
                {...tabData}
              />
            )}
          </div>
        </div>
        <div className="info">
          <SearchInput
            onQrClick={() => modalOpenHandler(setScanModalOpenState)}
            placeholder="Search Clients or Things "
            // icon="./assets/vectors/qr.svg"
          />
          <div className="nav">
            <div
              className="dark-menu"
              // onClick={toggleTopMenu}
            >
              <img src="./assets/vectors/dark-bg-menu.svg" alt="menu" />
            </div>
            <Link to="/settings" className="settings">
              {/* < to="/settings"> */}
              <img src="./assets/vectors/settings.svg" alt="settings" />
              {/* </> */}
            </Link>
            <div className="notifications">
              <img
                src="./assets/vectors/notifications.svg"
                alt="notifications"
              />
            </div>
            <div className="user d-flex align-items-center">
              <div className="fs-11 fw-600 mx-4">Stephan</div>
              <img src="./assets/vectors/nav-user.svg" alt="user" />
            </div>
          </div>
        </div>
      </div>

      <div id="content" className={contentClassName ? contentClassName : ""}>
        <div id="sidenav">
          <div className={`desc`}>
            <div className="workshop-workorder-layout">
              <div className="nav">
                {[
                  {
                    vector: "./assets/vectors/workorder-nav-1.svg",
                    vectorActive: "./assets/vectors/nav-elevate-active.svg",
                    to: "/business-360",
                    thisActiveLink: "elevate",
                  },
                  {
                    vector: "./assets/vectors/workorder-nav-2.svg",
                    vectorActive: "./assets/vectors/nav-connect-active.svg",
                    to: "/way",
                    thisActiveLink: "connect",
                  },
                  {
                    vector: "./assets/vectors/workorder-nav-3.svg",
                    vectorActive: "./assets/vectors/nav-desk-active.svg",
                    to: "/conversations",
                    thisActiveLink: "desk",
                  },
                  {
                    vector: "./assets/vectors/workorder-nav-4.svg",
                    vectorActive: "./assets/vectors/nav-inventory-active.svg",
                    to: "/inventory",
                    thisActiveLink: "inventory",
                  },
                  {
                    vector: "./assets/vectors/workorder-nav-5.svg",
                    vectorActive: "./assets/vectors/nav-manner-active.svg",
                    to: "/form-cards",
                    thisActiveLink: "manner",
                  },
                  {
                    vector: "./assets/vectors/workorder-nav-6.svg",
                    vectorActive: "./assets/vectors/nav-treasury-active.svg",
                    to: "/finances-income",
                    thisActiveLink: "treasury",
                  },
                  {
                    vector: "./assets/vectors/nav-workshop.svg",
                    vectorActive: "./assets/vectors/workorder-nav-7-active.svg",
                    to: "/workshop-realtime",
                    thisActiveLink: "workshop",
                    active: true,
                  },
                ].map((el, idx) => {
                  const { to, thisActiveLink, vector, vectorActive, text } = el;

                  return (
                    <Link
                      className={clsx({
                        active: activeLink === thisActiveLink,
                      })}
                      to={to}
                      key={"nav-item-" + idx}
                    >
                      <div className="vector-cnntainer">
                        <img src={vector} alt={text} />
                        <img className="active" src={vectorActive} alt={text} />
                      </div>
                      {text}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="bottom py-5">
              <Link to="#0">
                <img src="./assets/vectors/side-bottom-usage.svg" alt="" />{" "}
              </Link>
              <Link to="#0">
                <img src="./assets/vectors/side-bottom-logout.svg" alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="page-container"> */}
        <div className="body flex-grow-1">
          <div id="workshop-forms-main-content">
            <div className="container-fluid px-0">
              <div className="row gy-5">
                <div className="col-xxl col-lg-5">
                  <div className="car-main">
                    <div className="text-center">
                      <div className="fs-18 fw-bold">JFTK9887263312</div>
                      <div className="fs-18 fw-500 lh-1 mt-2">
                        2020 Toyota Prius Prime
                      </div>
                      <div className="fs-18 fw-300">LE HATCHBACK 4-DR</div>
                    </div>

                    <div className="car-info">
                      <div className="date-time">
                        <div className="d-flex align-items-center">
                          <div
                            style={{ background: "#1E55A9" }}
                            className="circle round-box"
                          ></div>
                          <div className="fs-12 fw-bold text-blue">
                            September 8, 2022
                          </div>
                        </div>
                        <div className="fs-12" style={{ paddingLeft: "13px" }}>
                          14:00 - 15:20
                        </div>
                      </div>

                      <div className="location">
                        <div className="fw-bold">Location 1</div>
                      </div>
                    </div>

                    <div className="car-container text-center">
                      <img
                        className="car mt-5"
                        src="./assets/vectors/car.svg"
                        alt="car"
                      />
                    </div>

                    <div className="details mt-5 px-3">
                      <div className="item">
                        1. Check for <strong> Noise </strong> located
                        <strong> Rear </strong> on
                        <strong> Left </strong>
                        Side, when <strong>He drives fast</strong>
                      </div>
                      <div className="item">
                        2. Check for <strong> Malfunction </strong> located
                        <strong> Front </strong> on <strong> Center </strong>{" "}
                        Side, when <strong> evening is coming</strong>
                      </div>
                    </div>

                    <div className="live pt-5 my-5">
                      <h3 className="section-title text-center">Live Stuff</h3>

                      <div className="item">
                        <div className="d-flex justify-content-center align-items-center mt-4">
                          <img
                            className="flex-shrink-0 me-3"
                            src="./assets/img/live-stuff.png"
                            alt="live-stuff"
                          />
                          <div>
                            <div className="fs-14 lh-1 fw-600">
                              Repair Scratch
                            </div>
                            <div className="fs-10 lh-1 mt-2 fw-400">
                              7 min ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-lg-7">
                  <div className="wrap">{children}</div>
                </div>
                <div className="col-xxl col-lg-3 d-xxl-none"></div>
                <div className="col-xxl col-lg-5">
                  <div className="card">
                    <div className="user-info mb-5">
                      <div className="">
                        <h3 className="section-title">
                          Bryandy Boyd
                          <img
                            className="ms-2"
                            src="./assets/vectors/verified-black.svg"
                            alt="noded"
                          />
                        </h3>
                        <div>ernest.mason@gmail.com</div>
                        <div className="fs-16 text-light-5">
                          WO #329878316-23
                        </div>
                      </div>
                      <div className="d-flex align-items-center pt-2">
                        <div className="ms-4">561-303-6106</div>
                        <img
                          className="ms-2"
                          src="./assets/vectors/user-placeholder.svg"
                          alt="client"
                        />
                      </div>
                    </div>

                    <h3 className="section-title mb-4">Details</h3>

                    <div className="details-main">
                      <div className="item">
                        <div className="c-pointer img">
                          <img
                            src="./assets/vectors/details-img.svg"
                            alt="img"
                          />
                        </div>
                        <div className="text">
                          <div className="line">
                            <div className="fw-600">Front Brake Change</div>
                            <h4 className="sub-title">87.00$</h4>
                          </div>
                          <div className="line">
                            <div className="sub-title text-light-5 fs-12">
                              Front Brake Change
                            </div>
                            <div className="fw-600 text-blue">x1</div>
                          </div>
                          <h5 className="mt-3 sub-title fw-500 text-blue mb-1">
                            Front brake change with original parts
                          </h5>
                          <div className="line">
                            <div className="radio-container">
                              <label className="custom-radio">
                                Front Pad X2
                                <input
                                  defaultChecked={true}
                                  type="checkbox"
                                  name="gender"
                                  defaultValue={"checked"}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <h5 className="sub-title">40.00$</h5>
                          </div>
                          <div className="line">
                            <div className="radio-container">
                              <label className="custom-radio">
                                Labor X1
                                <input
                                  defaultChecked={true}
                                  type="checkbox"
                                  name="gender"
                                  defaultValue={"checked"}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <h5 className="sub-title">47.00$</h5>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="c-pointer img">
                          <img
                            src="./assets/vectors/details-img.svg"
                            alt="img"
                          />
                        </div>
                        <div className="text">
                          <div className="line">
                            <div className="fw-600">Oil - (1L) 5W30 Syn.</div>
                            <h4 className="sub-title">5.49$</h4>
                          </div>
                          <div className="line">
                            <div className="sub-title text-light-5 fs-12">
                              5W30-23
                            </div>
                            <div className="fw-600 text-blue">x2</div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="c-pointer img">
                          <img
                            src="./assets/vectors/details-img.svg"
                            alt="img"
                          />
                        </div>
                        <div className="text">
                          <div className="line">
                            <div className="fw-600">7C Battery</div>
                            <h4 className="sub-title">2.00$</h4>
                          </div>
                          <div className="line">
                            <div className="sub-title text-light-5 fs-12">
                              B-7C-9762
                            </div>
                            <div className="fw-600 text-blue">x1</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="details-foot">
                      <div className="col-12">
                        <div className="row px-3 pt-4">
                          <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-12">
                            Subtotal
                          </div>
                          <div className="col-6 pb-3 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                            100.00$
                          </div>
                          <div className="col-6 text-dark-4 text-manrope fw-800 fs-12">
                            TPS
                          </div>
                          <div className="col-6 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                            5.00$
                          </div>
                          <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-12">
                            TVQ
                          </div>
                          <div className="col-6 pb-3 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                            9.98$
                          </div>
                          <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-14">
                            Total
                          </div>
                          <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-14 d-flex justify-content-end">
                            114.98$
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="copyright">
        © Node Technologies 2022 | All Rights Reserved
      </div>
    </div>
  );
};

export default WorkshopWorkorderLayout;
