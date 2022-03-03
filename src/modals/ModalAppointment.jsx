import React from "react";

import Modal from "./Modal";
import FancyInput from "../components/FancyInput";
import AddBtn from "../components/AddBtn";

const ModalAppointment = (props) => {
  return (
    <div>
      <Modal className="modal-appointment" buttonText="Add" {...props}>
        <div className="client-modal-body">
          <div className="container-fluid px-0">
            <div className="row gy-5">
              <div className="col-lg-5">
                <div className="row">
                  <h3 className="section-title mb-4">Appointment</h3>

                  <div className="col-12">
                    <FancyInput
                      prominant
                      sMargin
                      largePaddingBottom
                      id="name"
                      name="name"
                      label="Name"
                      placeholder="Give a Title to your Appointment..."
                    />
                  </div>
                  <div className="col-sm-6">
                    <FancyInput
                      prominant
                      sMargin
                      mdPaddingBottom
                      id="date"
                      name="date"
                      label="Date &amp; Duration"
                      placeholder="DD/MM/AA   at 00:000"
                    />
                  </div>
                  <div className="col-sm-6">
                    <FancyInput
                      prominant
                      sMargin
                      mdPaddingBottom
                      id="nodeClient"
                      name="nodeClient"
                      label="Node Client"
                      placeholder="Start typing..."
                    />
                  </div>
                  <div className="col-sm-6">
                    <FancyInput
                      prominant
                      sMargin
                      mdPaddingBottom
                      id="nodedWith"
                      name="nodedWith"
                      label="Noded with"
                      placeholder="Select in menu"
                    />
                  </div>
                  <div className="col-sm-4">
                    <FancyInput
                      prominant
                      sMargin
                      mdPaddingBottom
                      id="location"
                      name="location"
                      label="Location"
                      placeholder="Start typing..."
                    />
                  </div>
                  <div className="col-sm-2">
                    <FancyInput
                      labelClassName="mb-2 fs-12 d-block"
                      embossed={false}
                      prominant
                      sMargin
                      add
                      mdPaddingBottom
                      id="assignedTo"
                      name="assignedTo"
                      label="Assign to"
                    />
                  </div>
                  <div className="col-sm-12">
                    <FancyInput
                      prominant
                      sMargin
                      mdPaddingBottom
                      id="notes"
                      name="notes"
                      label="Notes"
                      placeholder="Add notes on this Appointment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row gy-5">
                  <div className="col-sm-6 d-flex align-items-center justify-content-center">
                    <img src="./assets/vectors/car.svg" alt="car" />
                  </div>
                  <div className="col-sm-6">
                    <h3 className="section-title">Appointment Landmarks</h3>

                    <div className="car-work-details emboss-white p-3 br-16 px-3 mt-4 pe-lg-5">
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

                    <div className="mt-5 d-flex justify-content-between">
                      <h3 className="section-title">Service &amp; Articles</h3>
                      <AddBtn small pale />
                    </div>

                    <div className="table-container mt-3">
                      <table>
                        <tr>
                          <td>
                            <div className="fs-12 fw-bold">78367492920</div>
                          </td>
                          <td>
                            <div className="fs-12 fw-bold text-light-5">
                              Front Bake Change
                            </div>
                          </td>
                          <td className="text-end" width={30}>
                            <img
                              src="./assets/vectors/delete.svg"
                              alt="delete"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="fs-12 fw-bold">78367492920</div>
                          </td>
                          <td>
                            <div className="fs-12 fw-bold text-light-5">
                              Oil Change
                            </div>
                          </td>
                          <td className="text-end" width={30}>
                            <img
                              src="./assets/vectors/delete.svg"
                              alt="delete"
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAppointment;
