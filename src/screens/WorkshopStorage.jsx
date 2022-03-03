import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import WorkshopLayout from "../layouts/WorkshopLayout";

const WorkshopStorage = () => {
  return (
    <WorkshopLayout title="Storage">
      <div className="location-container">
        <div className="container-fluid mt-4">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-5">
              <div className="emboss-white h-100 br-16 p-5">
                <SearchInput placeholder="Search in Storage Base" />
                <img
                  className="w-100 mt-5 d-block"
                  src="./assets/img/plan.png"
                  alt="plan"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-flex justify-content-between title-container">
                <div className="title">
                  <h4 className="evidence-word text-dark-1 mt-5 pt-2">
                    Location D
                  </h4>
                </div>
                <div className="d-flex align-items-center">
                  <Input
                    className="me-5"
                    select
                    id="locations"
                    name="locations"
                    options={[{ text: "External Storage" }]}
                  />
                  <AddBtn title="NEW" pale />
                </div>
              </div>

              <div className="container-fluid mt-4 px-0">
                <div className="row">
                  {[
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                  ].map((el, idx) => {
                    return (
                      <div className="col-sm-4">
                        <Link to="/workshop-articles" className="location-card">
                          <div className="qr-container">
                            <img
                              src="./assets/vectors/location-qr.svg"
                              alt="qr"
                            />
                          </div>
                          <h3 className="section-title mt-4">{el.text1}</h3>
                          <div>
                            <span className="text-lato fs-16 fw-700">
                              D &nbsp;
                            </span>
                            <span className="text-lato fs-16 fw-400">
                              / {el.text3}
                            </span>
                          </div>
                          <div className="fw-600 text-blue">{el.text4}</div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WorkshopStorage;
