import React from "react";
import AddBtn from "../components/AddBtn";

import SearchInput from "../components/SearchInput";
import Select from "../components/select/select";
import Option from "../components/select/option";
import CoursesLayout from "../layouts/CoursesLayout";

const CoursesRegistration = () => {
  return (
    <CoursesLayout title="Services Registration">
      <div className="registration-container">
        <div className="container-fluid px-0">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="noded">
                <div className="row gy-4">
                  <div className="col-lg-4">
                    <div className="card emboss-white br-16">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <h3 className="section-title">Bryandy Boyd</h3>
                          <img
                            className="ms-2"
                            src="./assets/vectors/verified-black.svg"
                            alt="verified"
                          />
                        </div>

                        <img src="./assets/vectors/bin-3.svg" alt="bin" />
                      </div>

                      <div className="mt-3 d-flex flex-wrap">
                        <div className="img">
                          <img
                            src="./assets/img/client-vector-1.png"
                            alt="client"
                          />
                        </div>
                        <div className="img">
                          <img
                            className="sm"
                            src="./assets/vectors/car-1.svg"
                            alt="car"
                          />
                        </div>
                        <div className="img">
                          <img
                            src="./assets/img/client-vector-1.png"
                            alt="client"
                          />
                        </div>
                      </div>

                      <div className="my-3 d-flex justify-content-between">
                        <Select rootClassName="my-2" placeholder="Locations">
                          <Option value="Location 1">Location 1</Option>
                        </Select>
                        <Select rootClassName="my-2" placeholder="Days">
                          <Option value="Day 1">Day 1</Option>
                        </Select>
                      </div>

                      <div className="mt-2">
                        <SearchInput
                          rootClassName="w-100"
                          placeholder="Specific search..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card emboss-white br-16">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <h3 className="section-title">Bryandy Boyd</h3>
                          <img
                            className="ms-2"
                            src="./assets/vectors/verified-black.svg"
                            alt="verified"
                          />
                        </div>

                        <img src="./assets/vectors/bin-3.svg" alt="bin" />
                      </div>

                      <div className="mt-3 d-flex flex-wrap">
                        <div className="img">
                          <img
                            src="./assets/img/client-vector-1.png"
                            alt="client"
                          />
                        </div>
                        <div className="img">
                          <img
                            className="sm"
                            src="./assets/vectors/car-1.svg"
                            alt="car"
                          />
                        </div>
                        <div className="img">
                          <img
                            src="./assets/img/client-vector-1.png"
                            alt="client"
                          />
                        </div>
                      </div>

                      <div className="my-3 d-flex justify-content-center">
                        <Select rootClassName="my-2" placeholder="Locations">
                          <Option value="Location 1">Location 1</Option>
                        </Select>
                        <Select rootClassName="my-2" placeholder="Days">
                          <Option value="Day 1">Day 1</Option>
                        </Select>
                      </div>

                      <div className="mt-2">
                        <SearchInput
                          rootClassName="w-100"
                          placeholder="Specific search..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <AddBtn pale />
                  </div>
                </div>
              </div>

              <div className="registrations">
                <div className="row">
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="card text-center emboss-white">
                      <img src="./assets/vectors/reg-1.svg" alt="img" />

                      <div className="badge">Indoors</div>

                      <div className="fw-600 fs-16">Yoga Class</div>

                      <div className="text-light-8">Cégep - Patricia</div>
                      <div className="text-light-8">09/08 - Monday 19:00</div>

                      <h5 className="sub-title mt-4">112,90$</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="card text-center emboss-white">
                      <img src="./assets/vectors/reg-2.svg" alt="img" />

                      <div className="badge">Indoors</div>

                      <div className="fw-600 fs-16">Zumba Class</div>

                      <div className="text-light-8">Cégep - Patricia</div>
                      <div className="text-light-8">09/08 - Monday 19:00</div>

                      <h5 className="sub-title mt-4">13,90$</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="card text-center emboss-white">
                      <img src="./assets/vectors/reg-3.svg" alt="img" />

                      <div className="badge">Camp</div>

                      <div className="fw-600 fs-16">Day Camp</div>

                      <div className="text-light-8">Cégep - Patricia</div>
                      <div className="text-light-8">09/08 - Monday 19:00</div>

                      <h5 className="sub-title mt-4">22,90$</h5>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 col-md-6">
                    <div className="card text-center emboss-white">
                      <img src="./assets/vectors/reg-4.svg" alt="img" />

                      <div className="badge">Aquatic</div>

                      <div className="fw-600 fs-16">Whale Swim Class</div>

                      <div className="text-light-8">Cégep - Patricia</div>
                      <div className="text-light-8">09/08 - Monday 19:00</div>

                      <h5 className="sub-title mt-4">89,90$</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-gradient">
                  Convert to Invoice
                  <img
                    className="ms-3"
                    src="./assets/vectors/r-arrow-btn.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-between">
                <h3 className="section-title">Details</h3>
                <div className="text-poppins fw-500 fs-18">#329878316-23</div>
              </div>
              <div className="details-container">
                <div className="details-main">
                  <h3 className="section-title">Bryandy Boyd</h3>

                  <div className="item">
                    <div className="c-pointer img user-img">
                      <img src="./assets/img/client-vector-4.png" alt="img" />
                    </div>
                    <div className="text">
                      <div className="line">
                        <div className="fw-600">Yoga Class</div>
                        <h4 className="sub-title">87.00$</h4>
                      </div>
                      <div className="line">
                        <div className="sub-title text-light-5 fs-12">
                          A32-2342-123-2321
                        </div>
                        <div className="fw-600 text-blue">x1</div>
                      </div>
                      <h5 className="mt-3 sub-title fw-500 text-blue mb-1">
                        Passes noded with this
                      </h5>
                      <div className="line">
                        <div className="radio-container">
                          <label className="custom-radio">
                            (8 x) 90 min. Monday 19h
                            <input
                              defaultChecked={true}
                              type="checkbox"
                              name="gender"
                              defaultValue={"checked"}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        {/* <h5 className="sub-title"></h5> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="c-pointer img user-img">
                      <img src="./assets/img/client-vector-4.png" alt="img" />
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
                </div>

                <div className="details-main">
                  <h3 className="section-title">Bryandy Boyd</h3>

                  <div className="item">
                    <div className="c-pointer img user-img">
                      <img src="./assets/img/client-vector-7.png" alt="img" />
                    </div>
                    <div className="text">
                      <div className="line">
                        <div className="fw-600">Day Camp</div>
                        <h4 className="sub-title">27.00$</h4>
                      </div>
                      <div className="line">
                        <div className="sub-title text-light-5 fs-12">
                          A32-2342-123-2321
                        </div>
                        <div className="fw-600 text-blue">x1</div>
                      </div>
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
    </CoursesLayout>
  );
};

export default CoursesRegistration;
