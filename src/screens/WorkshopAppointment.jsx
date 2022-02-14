import React from "react";

import WorkshopLayout from "../layouts/WorkshopLayout";
import AddBtn from "../components/AddBtn";
import Schedular from "../components/Schedular";

const WorkshopAppointment = () => {
  return (
    <WorkshopLayout>
      <div className="appointment-container">
        <div className="d-flex justify-content-end align-items-center my-4">
          <h3 className="section-title">September7, 2022</h3>
          <img
            className="ms-4 me-5"
            src="./assets/vectors/calendar.svg"
            alt="calendar"
          />
          <AddBtn blue title="NEW" />
        </div>

        <div className="schedule-control-section-wrap">
          <Schedular />
        </div>

        <div className="week-load">
          <div className="left">
            <div className="ps-3">
              <h3 className="section-title">Week Load</h3>
              <div className="text-label fs-10 text-light-5 lh-1 mt-1">
                Click on the employee to see <br /> the details over a week
              </div>
            </div>
            <div className="selector">
              <div className="d-flex align-items-center">
                <div className="btn center-content p-0">
                  <img src="./assets/vectors/arrow-left-blue.svg" alt="arrow" />
                </div>
                <div className="tag text-blue text-lato fw-700 mx-1">
                  09-01 to 15-01
                </div>
                <div className="btn center-content p-0">
                  <img
                    src="./assets/vectors/arrow-right-blue.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="load-main">
              {[
                {
                  size: "two",
                  number: 2,
                  userImg: "./assets/img/chat-me.png",
                },
                {
                  size: "two",
                  number: 2,
                  userImg: "./assets/img/chat-me.png",
                },
                {
                  size: "four",
                  number: 4,
                  userImg: "./assets/img/chat-me.png",
                },
                {
                  size: "two",
                  number: 2,
                  userImg: "./assets/img/chat-me.png",
                },
                {
                  size: "one",
                  number: 1,
                  userImg: "./assets/img/chat-me.png",
                },
                {
                  size: "two",
                  number: 2,
                  userImg: "./assets/img/chat-me.png",
                },
              ].map((el, idx) => {
                const { size, number, userImg } = el;

                return (
                  <div key={"load-item" + idx} className="item">
                    <div className="number-wrap">
                      <div className={`number${size ? " " + size : ""}`}>
                        <div className="text">{number}</div>
                      </div>
                    </div>
                    <img src={userImg} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WorkshopAppointment;
