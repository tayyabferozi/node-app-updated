import React from "react";

import Modal from "./Modal";
import AddBtn from "../components/AddBtn";
import Input from "../components/Input";
import FancyInput from "../components/FancyInput";

const ModalProfile = (props) => {
  return (
    <div>
      <Modal
        title="Order Rear Light"
        className="order-modal"
        buttonText="Update"
        headInput={{
          add: true,
          id: "assigned",
          name: "assigned",
          label: "Assigned to",
        }}
        headRightComp={
          <div className="options d-flex ms-3 align-items-end pb-3">
            <div className="btn">
              <img src="./assets/vectors/clip.svg" alt="clip" />
            </div>
            <div className="btn">
              <img src="./assets/vectors/pta-ni.svg" alt="pta-ni" />
            </div>
            <div className="btn ms-4 ps-2">
              <img src="./assets/vectors/horizontal-menu.svg" alt="menu" />
            </div>
          </div>
        }
        {...props}
      >
        <div className="profile-modal-body">
          <div className="profile-modal-main">
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-sm-6">
                  <FancyInput
                    prominant
                    id="nodeClient"
                    name="nodeClient"
                    label="Node Client"
                    placeholder="Start typing..."
                  />
                </div>
                <div className="col-sm-6">
                  <FancyInput
                    select
                    options={[{ text: "Select in the menu" }]}
                    prominant
                    id="client"
                    name="client"
                    label="Noded with"
                    placeholder="Select in the menu"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="fw-600">Description</div>
                  <div className="text-small text-dark">
                    Clay is a new type of tool that brings together the best
                    parts of spreadsheets, coding &amp; simple automation.
                    Quickly connect your apps and code into automated workflows.
                  </div>
                </div>
                <div className="col-sm-6">
                  <FancyInput
                    select
                    options={[{ text: "Select in the menu" }]}
                    prominant
                    prominantBlue
                    sMargin
                    id="client"
                    name="client"
                    placeholder="Select in the menu"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-between">
              <div className="fw-700 fs-12 sub-title">Sub-Tasks</div>
              <AddBtn black title="NEW" />
            </div>

            <div className="sub-tasks">
              {[
                {
                  checked: true,
                  text: "Create real-time seeket for agenda",
                  day: "Tommorrow",
                },
                {
                  text: "Suggest a discussion of statistics",
                },
              ].map((el, idx) => {
                return (
                  <div
                    key={"sub-task" + idx}
                    className={`sub-task${el.checked ? " checked" : ""}`}
                  >
                    <Input
                      defaultChecked={el.checked}
                      greenCheckbox
                      options={[{ text: el.text }]}
                      checkbox
                    />
                    <div>
                      {!el.day && (
                        <img
                          src="./assets/vectors/calender-4.svg"
                          alt="calender"
                        />
                      )}
                      {el.day && (
                        <div className="day">
                          <img
                            className="me-2"
                            src="./assets/vectors/calender-4-red.svg"
                            alt="calender"
                          />
                          {el.day}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 d-flex justify-content-between">
              <div className="fw-700 fs-12 sub-title">Attachments</div>
              <AddBtn black title="NEW" />
            </div>

            <div className="attachment-sm">
              <img src="./assets/img/comment-attachment.jpg" alt="attachment" />
            </div>
          </div>

          <div className="comments">
            {[
              {
                name: "Moinul Hasan",
                task: "created this task.",
                date: "Yesterday at 6:27 PM",
                edit: "change the due date oct 12.",
                editDate: "Oct 2.",
              },
              {
                name: "Moinul Hasan",
                task: "attached",
                date: "2 days ago",
                attachment: "./assets/img/comment-attachment.jpg",
              },
            ].map((el, idx) => {
              const { name, task, date, edit, editDate, attachment } = el;

              return (
                <div key={"comment" + idx} className="comment-item">
                  <div className="img">
                    <img
                      src="./assets/vectors/comment-user.svg"
                      alt="comment-user"
                    />
                  </div>
                  <div className="text">
                    <div className="text-1 fs-13">
                      {name + " " + task}{" "}
                      <span className="text-light-5 fs-11">{date}</span>
                    </div>
                    {edit && (
                      <div className="text-2">
                        <span className="fs-11 fw-600">{name}</span>{" "}
                        <span className="fs-11 fw-500"> {edit}</span>{" "}
                        <span className="text-light-5 fs-11">{editDate}</span>
                      </div>
                    )}
                    {attachment && (
                      <div className="attachment">
                        <img src={attachment} alt="name" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="comment-item">
              <div className="img">
                <img
                  src="./assets/vectors/comment-user.svg"
                  alt="comment-user"
                />
              </div>
              <div className="text">
                <input type="text" placeholder="Write a comment..." />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProfile;
