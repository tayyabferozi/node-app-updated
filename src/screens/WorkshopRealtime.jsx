import React from "react";

import WorkshopLayout from "../layouts/WorkshopLayout";
import Input from "../components/Input";
import Switch from "../components/Switch";

const WorkshopRealtime = () => {
  return (
    <WorkshopLayout>
      <div className="realtime-container">
        <div className="container-fluid px-0 mt-3">
          <div className="row gy-4">
            <div className="col-12">
              <div className="d-flex justify-content-end align-items-center mb-4">
                <h3 className="section-title">September7, 2022</h3>
                <img
                  className="ms-5"
                  src="./assets/vectors/calendar.svg"
                  alt="calendar"
                />
                <Input
                  select
                  id="employee"
                  name="employee"
                  options={[{ text: "All Employee" }]}
                />
                <Input
                  select
                  id="locations"
                  name="locations"
                  options={[{ text: "All Locations" }]}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="next-up">
                <h3 className="section-title">Next Up</h3>
                <RealtimeCards
                  cardsData={[
                    {
                      title: "Oil Change",
                      subTitle: "Ford Focus 2021",
                      location: "Location 1",
                      progress: 60,
                      userName: "Damien Latour",
                      time: "13:00",
                      withSwitch: true,
                      switchActive: true,
                      withAdd: true,
                      bottomUserImg: "./assets/vectors/card-user-1.svg",
                    },
                    {
                      title: "TIres + Oil Change",
                      subTitle: "Toyota Crolla 2019",
                      location: "Location 2",
                      progress: 50,
                      userName: "Georges Cratow",
                      time: "13:00",
                      userImg: "./assets/img/table-user-1.png",
                      bottomUserImg: "./assets/vectors/card-user-2.svg",
                      displaced: true,
                    },
                    {
                      title: "Noise rear Right",
                      subTitle: "Volkswagen Jetta 2007",
                      location: "Location 2",
                      progress: 60,
                      userName: "Evegunia Manito",
                      time: "14:15",
                      withSwitch: true,
                      switchActive: false,
                      withAdd: true,
                      bottomUserImg: "./assets/vectors/card-user-3.svg",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="in-progress">
                <h3 className="section-title">In Progress</h3>
                <RealtimeCards
                  cardsData={[
                    {
                      title: "Brake rear Check up",
                      subTitle: "Hyundai Elantra 2010",
                      location: "Location 1",
                      progress: 60,
                      userName: "Vanessa Duba",
                      time: "14:00",
                      withSwitch: true,
                      switchActive: true,
                      userImg: "./assets/img/table-user-2.png",
                      bottomUserImg: "./assets/vectors/card-user-4.svg",
                    },
                    {
                      title: "Noise rear Right",
                      subTitle: "Volkswagen Jetta 2007",
                      location: "Location 2",
                      progress: 60,
                      userName: "Evegunia Manito",
                      time: "14:15",
                      withSwitch: true,
                      switchActive: true,
                      withAdd: true,
                      bottomUserImg: "./assets/vectors/card-user-3.svg",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="done">
                <h3 className="section-title">Done</h3>
                <RealtimeCards
                  cardsData={[
                    {
                      title: "Change Engine Plugs",
                      subTitle: "Chevrolet Cruze 2020",
                      location: "Location 3",
                      userName: "Loic Kauffel",
                      time: "14:15",
                      withSwitch: true,
                      switchActive: true,
                      withAdd: true,
                      bottomUserImg: "./assets/vectors/card-user-5.svg",
                    },
                    {
                      title: "Light polish",
                      subTitle: "Honda Civic 2021",
                      location: "Location 1",
                      userName: "Kezata Lalumi",
                      time: "14:15",
                      withSwitch: true,
                      switchActive: true,
                      withAdd: true,
                      bottomUserImg: "./assets/vectors/card-user-4.svg",
                    },
                    {
                      title: "Liquid flows under",
                      subTitle: "Toyota Prius 2021",
                      location: "Location 2",
                      progress: 60,
                      userName: "Vanessa Duba",
                      time: "14:00",
                      withSwitch: true,
                      switchActive: true,
                      userImg: "./assets/img/table-user-2.png",
                      bottomUserImg: "./assets/vectors/card-user-6.svg",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

const RealtimeCards = ({ cardsData }) => {
  return (
    <div className="cards">
      {cardsData.map((el, idx) => {
        const {
          title,
          subTitle,
          location,
          progress,
          userName,
          time,
          userImg,
          withSwitch,
          switchActive,
          withAdd,
          bottomUserImg,
          displaced,
        } = el;

        return (
          <div
            key={"card-" + title + idx}
            className={`card-wrap${displaced ? " card-displaced" : ""}`}
          >
            <div className="card">
              <div className="card-head d-flex justify-content-between align-items-center">
                <div className="text">
                  <div className="fw-600">{title}</div>
                  <h5 className="sub-title text-light-5">{subTitle}</h5>
                </div>
                <div className="options d-flex justify-content-end align-items-center">
                  {withSwitch && <Switch defaultChecked={switchActive} />}
                  {userImg && (
                    <img className="user-img" src={userImg} alt="add" />
                  )}
                  {withAdd && (
                    <button className="btn btn-plus">
                      <img
                        src="./assets/vectors/workshop-cart-add.svg"
                        alt="add"
                      />
                    </button>
                  )}
                </div>
              </div>
              <div className="card-body">
                <h4 className="sub-title text-light-5">{location}</h4>
                <div className="progress-bar">
                  <div className="bg"></div>
                  <div
                    className="progress"
                    style={{ width: progress + "%" }}
                  ></div>
                </div>
              </div>
              <div className="card-foot">
                <div className="user-info">
                  {bottomUserImg && <img src={bottomUserImg} alt="card-user" />}
                  <h4 className="sub-title text-light-5">{userName}</h4>
                </div>
                <div className="time">
                  <div className="text fw-600">{time}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkshopRealtime;
