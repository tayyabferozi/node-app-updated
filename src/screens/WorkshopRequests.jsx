import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Select from "../components/select/select";
import Option from "../components/select/option";
import WorkshopLayout from "../layouts/WorkshopLayout";
import Input from "../components/Input";
import AddBtn from "../components/AddBtn";

const WorkshopRequests = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  return (
    <WorkshopLayout title="Requests">
      <div className="requests-container">
        <div className="container-fluid px-0">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="row gy-5 gx-xxl-5">
                <div className="col-md-8">
                  <div className="d-flex justify-content-between">
                    <h3 className="section-title">Service Brake Changes</h3>

                    <div className="fs-14 fw-400">Request #8974376-3222</div>
                  </div>

                  <div className="mt-4 card changes emboss-white br-16">
                    <div className="container-fluid px-0">
                      <div className="row">
                        <div className="col-md-6">
                          <Select placeholder="Status">
                            <Option value="Lorem">Lorem</Option>
                          </Select>

                          <div className="textarea-container">
                            <Input
                              rows={9}
                              label="Description"
                              textArea
                              value={
                                "Clay is a new type of tool that brings together the best parts of spreadsheets, coding & simple automation. Quickly connect your apps and code into automated workflows."
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <Select placeholder="Type of Request">
                            <Option value="Lorem">Lorem</Option>
                          </Select>
                          <Select placeholder="Noded With">
                            <Option value="Lorem">Lorem</Option>
                          </Select>
                          <Select placeholder="Assigned to">
                            <Option value="Lorem">Lorem</Option>
                          </Select>

                          <div className="date-picker-root">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              dateFormat="MMMM dd, yyyy"
                            />
                            <img
                              className="calendar ms-4 me-4"
                              src="./assets/vectors/calendar-5.svg"
                              alt="calendar"
                            />
                          </div>
                          <div className="date-picker-root">
                            <DatePicker
                              selected={startDate2}
                              onChange={(date) => setStartDate2(date)}
                              dateFormat="MMMM dd, yyyy"
                            />
                            <img
                              className="calendar ms-4 me-4"
                              src="./assets/vectors/calendar-5.svg"
                              alt="calendar"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="px-md-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="section-title">Sub-Tasks</h3>

                      <AddBtn small blue pale />
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
                          day: "20-10-2022",
                        },
                      ].map((el, idx) => {
                        return (
                          <div
                            key={"sub-task" + idx}
                            className={`sub-task${
                              el.checked ? " checked" : ""
                            }`}
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

                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ marginTop: "6rem" }}
                    >
                      <h3 className="section-title">Attachments</h3>

                      <AddBtn small blue pale />
                    </div>

                    <div className="mt-3">
                      <div className="fs-12">Report84284.pdf</div>
                      <div className="fs-12">Picture_of_problem.jpg</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="user-info mb-4 d-flex align-items-start flex-wrap">
                    <div className="d-flex">
                      <img
                        className="ms-2"
                        width={42}
                        src="./assets/vectors/user-placeholder.svg"
                        alt="client"
                      />
                      <div className="ms-3">
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
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <div className="ms-4">561-303-6106</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between title-container">
                    <div className="title">
                      <h3 className="section-title text-dark-1">Profiles</h3>
                      <div className="title-label mt-1">
                        Noded with the Request
                      </div>
                    </div>
                    <AddBtn blue />
                  </div>

                  <div className="card profiles-main emboss-white br-16 mt-3 d-block">
                    <div className="left">
                      <div className="item emboss-md-inner mb-3">
                        <img
                          src="./assets/vectors/toyota-prius-prime.svg"
                          alt="toyota"
                        />
                        <div class="text">
                          <div class="text-dark-3 fw-600">
                            2020 Toyota Prius Prime
                          </div>
                          <h5 class="sub-title">JFTK9887263312</h5>
                          <div class="text-dark-3 fw-400 fs-7 text-manrope d-flex align-items-center">
                            Noded &amp; Validated
                            <img
                              class="ms-2"
                              src="./assets/vectors/validated.svg"
                              alt="validated"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item emboss-md-inner">
                        <img
                          src="./assets/vectors/toyota-prius-prime.svg"
                          alt="toyota"
                        />
                        <div class="text">
                          <div class="text-dark-3 fw-600">
                            2020 Toyota Prius Prime
                          </div>
                          <h5 class="sub-title">JFTK9887263312</h5>
                          <div class="text-dark-3 fw-400 fs-7 text-manrope d-flex align-items-center">
                            Noded &amp; Validated
                            <img
                              class="ms-2"
                              src="./assets/vectors/validated.svg"
                              alt="validated"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between title-container">
                    <div className="title">
                      <h3 className="section-title text-dark-1">
                        Internal Activities
                      </h3>
                      <div className="title-label mt-1">
                        Work with team on this Request
                      </div>
                    </div>
                  </div>

                  <div className="comments mt-4">
                    <div className="emboss-white p-4 br-16">
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
                        const { name, task, date, edit, editDate, attachment } =
                          el;

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
                                <span className="text-light-5 fs-11">
                                  {date}
                                </span>
                              </div>
                              {edit && (
                                <div className="text-2">
                                  <span className="fs-11 fw-600">{name}</span>{" "}
                                  <span className="fs-11 fw-500"> {edit}</span>{" "}
                                  <span className="text-light-5 fs-11">
                                    {editDate}
                                  </span>
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
                    </div>
                    <div className="comment-item mt-4">
                      <div className="text">
                        <input
                          className=""
                          type="text"
                          placeholder="Write a comment..."
                        />
                      </div>
                      <button className="ms-3 btn btn-gradient">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className="section-title mb-3">Messages</h3>

              <div className="right-chat-main-content">
                <div className="main-chat">
                  <div className="chat-main-body mb-4 p-4 px-2">
                    {[
                      {
                        type: "msg",
                        userImg: "./assets/vectors/chat-user-1.svg",
                        msgContents: [
                          {
                            type: "text",
                            text: "Recently I saw properties in a great location that I did not pay attention to before😄",
                          },
                        ],
                        msgTime: "1 day ago",
                      },
                      {
                        me: true,
                        type: "msg",
                        userImg: "./assets/img/chat-me.png",
                        msgContents: [
                          {
                            type: "text",
                            text: "I am interested to know more about your prices and services you offer",
                          },
                        ],
                        msgTime: "1 day ago",
                      },
                      {
                        type: "timetag",
                        date: "Today",
                      },
                      {
                        type: "msg",
                        userImg: "./assets/vectors/chat-user-1.svg",
                        msgContents: [
                          {
                            type: "text",
                            text: "I’ll raise a retun request for you. Here are the instructions to get the package ready for return. The return process will take max 2 days depends on the traffic return exclude the shipping",
                          },
                          {
                            type: "file",
                            icon: "",
                            text: "Return Product",
                            info: "pdf - 2.9MB",
                          },
                        ],
                        msgTime: "2 min ago",
                      },
                      {
                        me: true,
                        type: "msg",
                        userImg: "./assets/img/chat-me.png",
                        msgContents: [
                          {
                            type: "text",
                            text: "I am interested to know more about your prices and services you offer",
                          },
                        ],
                        msgTime: "just now",
                      },
                    ].map((el, idx) => {
                      const { type, userImg, msgContents, msgTime, me, date } =
                        el;

                      if (type === "msg") {
                        return (
                          <div
                            key={"msgs" + idx}
                            className={`chat-msg${me ? " me" : ""}`}
                          >
                            {msgContents.map((item, idx2) => {
                              const { type, text, info } = item;
                              return (
                                <div
                                  className="msg-body"
                                  key={"msg" + idx + idx2}
                                >
                                  <div className="img">
                                    <img src={userImg} alt="user-img" />
                                  </div>
                                  <div className="text">
                                    {type === "text" ? (
                                      <div className="chat-text">{text}</div>
                                    ) : (
                                      <div className="file-container">
                                        <div className="file-desc">
                                          <img
                                            src="./assets/vectors/file-icon.svg"
                                            alt="file"
                                          />
                                          <div className="file-text">
                                            <div className="chat-text">
                                              {text}
                                            </div>
                                            <div className="chat-text">
                                              {info}
                                            </div>
                                          </div>
                                        </div>
                                        <img
                                          className="download"
                                          src="./assets/vectors/file-download.svg"
                                          alt="download"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                            <div className="msg-foot">
                              <div className="time">{msgTime}</div>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div className="timetag-container" key={"foot" + idx}>
                            <div className="time-tag">
                              <div className="tag">{date}</div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="new-msg pt-4">
                  <Input
                    // value={searchState}
                    // onChange={searchChangeHandler}
                    id="msg"
                    name="msg"
                    placeholder="Write a message"
                    textArea
                  />
                  <div className="ms-4 btn btn-send btn-gradient">Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WorkshopRequests;
