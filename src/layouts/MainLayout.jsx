import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import clsx from "clsx";
import Tabs from "../components/Tabs";

import $ from "jquery";
import SearchInput from "../components/SearchInput";
import ModalScan from "../modals/ModalScan";
import TopNav from "./partials/TopNav";

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

const MainLayout = ({
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
  const [formState, setFormState] = useState({ search: "" });

  const modalOpenHandler = (func) => {
    func(true);
  };

  const modalCloseHandler = (func) => {
    func(false);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
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

  return (
    <div id="main">
      <ModalScan
        isOpen={scanModalOpenState}
        modalCloseHandler={() => modalCloseHandler(setScanModalOpenState)}
      />
      <div
        className="dark-overlay overlay-sidenav"
        onClick={toggleSideNav}
      ></div>
      <div id="sidenav">
        <div className={`desc${minimalNavRight ? " minimal" : ""}`}>
          <div className="main">
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
            <img
              className="hamburger d-1300-none"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
              onClick={toggleSideNav}
            />

            <div className="nav">
              {[
                {
                  vector: "./assets/vectors/nav-elevate.svg",
                  vectorActive: "./assets/vectors/nav-elevate-active.svg",
                  to: "/business-360",
                  thisActiveLink: "elevate",
                  text: "Let's elevate",
                },
                {
                  vector: "./assets/vectors/nav-connect.svg",
                  vectorActive: "./assets/vectors/nav-connect-active.svg",
                  to: "/way",
                  thisActiveLink: "connect",
                  text: "Connect",
                },
                {
                  vector: "./assets/vectors/nav-desk.svg",
                  vectorActive: "./assets/vectors/nav-desk-active.svg",
                  to: "/conversations",
                  thisActiveLink: "desk",
                  text: "Desk",
                },
                {
                  vector: "./assets/vectors/nav-inventory.svg",
                  vectorActive: "./assets/vectors/nav-inventory-active.svg",
                  to: "/inventory",
                  thisActiveLink: "inventory",
                  text: "Inventory",
                },
                {
                  vector: "./assets/vectors/nav-manner.svg",
                  vectorActive: "./assets/vectors/nav-manner-active.svg",
                  to: "/form-cards",
                  thisActiveLink: "manner",
                  text: "Manner",
                },
                {
                  vector: "./assets/vectors/nav-treasury.svg",
                  vectorActive: "./assets/vectors/nav-treasury-active.svg",
                  to: "/finances-income",
                  thisActiveLink: "treasury",
                  text: "Treasury",
                },
                {
                  vector: "./assets/vectors/nav-workshop.svg",
                  vectorActive: "./assets/vectors/nav-workshop-active.svg",
                  to: "/workshop-realtime",
                  thisActiveLink: "workshop",
                  text: "Workshop",
                },
                {
                  vector: "./assets/vectors/nav-workshop.svg",
                  vectorActive: "./assets/vectors/nav-workshop-active.svg",
                  to: "/courses-live",
                  thisActiveLink: "courses",
                  text: "Courses & Activities",
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
              Resources &amp; Usage
            </Link>
            <Link to="#0">
              <img src="./assets/vectors/side-bottom-logout.svg" alt="" />{" "}
              Logout
            </Link>
          </div>
        </div>
      </div>
      <div id="content" className={contentClassName ? contentClassName : ""}>
        <div className="page-container">
          <div className="head">
            <div className="page-heading">
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
            <div className="info">
              <SearchInput
                onQrClick={() => modalOpenHandler(setScanModalOpenState)}
                placeholder="Search Clients or Things "
                value={formState.search}
                name="search"
                onChange={inputChangeHandler}
                // icon="./assets/vectors/qr.svg"
              />
              <TopNav />
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
        <div className="copyright">
          © Node Technologies 2022 | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
