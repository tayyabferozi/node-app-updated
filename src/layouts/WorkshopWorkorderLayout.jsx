import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
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

const WorkshopWorkorderLayout = ({
  tabData,
  activeLink,
  contentClassName,
  children,
  title,
  minimalNavRight,
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

  useEffect(() => {
    itemContainersRef.current = itemContainersRef.current.slice(
      0,
      navItems.length
    );
    itemsRef.current = itemsRef.current.slice(0, navItems.length);

    const lottieOptions = {
      renderer: "svg",
      loop: false,
      autoplay: false,
    };

    const anim1 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[0],
      animationData: require("../animations/animation_kybu5p0h.json"),
    });
    const anim2 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[1],
      animationData: require("../animations/animation_kyc2cdig.json"),
    });
    const anim3 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[2],
      animationData: require("../animations/animation_kyc25zsj.json"),
    });
    const anim4 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[3],
      animationData: require("../animations/animation_kyc27m1g.json"),
    });
    const anim5 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[4],
      animationData: require("../animations/animation_kyc28kpf.json"),
    });
    const anim6 = lottie.loadAnimation({
      ...lottieOptions,
      container: itemsRef.current[5],
      animationData: require("../animations/animation_kyc29iw0.json"),
    });

    const anims = [anim1, anim2, anim3, anim4, anim5, anim6];

    const animLastFrame = 200;

    anim1.goToAndStop(animLastFrame, true);
    anim3.goToAndStop(animLastFrame, true);

    itemContainersRef.current.forEach((el, idx) => {
      el.addEventListener("mouseenter", (e) => {
        anims[idx].goToAndStop(0, true);
        anims[idx].setDirection(1);
        anims[idx].play();
      });
      el.addEventListener("mouseleave", (e) => {
        let frame = 0;
        if (idx === 0 || idx === 2) {
          frame = animLastFrame;
        }
        anims[idx].goToAndStop(frame, true);
      });
    });
  }, []);

  const toggleSideNav = () => {
    $("#sidenav").toggleClass("active");
    $(".dark-overlay.overlay-sidenav").toggleClass("active");
  };

  const toggleTopMenu = () => {
    $(".sidemenu").toggleClass("active");
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
              onClick={toggleTopMenu}
            >
              <img src="./assets/vectors/sidemenu-close.svg" alt="close" />
            </button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center pt-4">
          <Link to="/360">
            <img
              className="logo"
              src="./assets/vectors/logo-new.svg"
              alt="logo"
            />
          </Link>
          <div className="mt-2 text-center fw-500">{title}</div>

        </div>
        <div className="page-heading">


          {tabData && (
            <Tabs
              tabGroupName={tabData.groupName}
              data={tabData.tabs}
              img={tabData.img}
              {...tabData}
            />
          )}
        </div>
        <div className="info">
          <SearchInput
            onQrClick={() => modalOpenHandler(setScanModalOpenState)}
            placeholder="Search Clients or Things "
          // icon="./assets/vectors/qr.svg"
          />
          <div className="nav">
            <div className="dark-menu" onClick={toggleTopMenu}>
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
                    to: "#0",
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
                  },
                ].map((el, idx) => {
                  const { to, thisActiveLink, vector, vectorActive, text } = el;

                  return (
                    <Link
                      className={clsx({ active: activeLink === thisActiveLink })}
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
        <div className="page-container">


          <div className="body">{children}</div>
        </div>
      </div>
      <div className="copyright">
        © Node Technologies 2022 | All Rights Reserved
      </div>
    </div>
  );
};

export default WorkshopWorkorderLayout;
