import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CoursesLayout from "../layouts/CoursesLayout";
import AddBtn from "../components/AddBtn";
import SchedularActivities from "../components/SchedularActivities";
import ModalAppointment from "../modals/ModalAppointment";
import Select from "../components/select/select";
import Option from "../components/select/option";

const CoursesSchedule = () => {
  const [isModalOpenState, setIsModalOpenState] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <ModalAppointment
        isOpen={isModalOpenState}
        modalCloseHandler={() => setIsModalOpenState(false)}
      />
      <CoursesLayout title="Schedule">
        <div className="appointment-container">
          <div className="d-flex justify-content-end align-items-center my-4 top-container">
            <div>
              <div className="date-picker-root">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMMM dd, yyyy"
                />
                <img
                  className="calendar ms-4 me-5"
                  src="./assets/vectors/calendar.svg"
                  alt="calendar"
                />
              </div>

              <Select placeholder="All Employee" style={{ minWidth: 110 }}>
                <Option value="All Employee">All Employee</Option>
                <Option value="Employee 1">Employee 1</Option>
                <Option value="Employee 2">Employee 2</Option>
              </Select>
              <Select placeholder="Polyvalente" style={{ minWidth: 110 }}>
                <Option value="All Employee">Polyvalente</Option>
                <Option value="Location 1">Location 1</Option>
                <Option value="Location 2">Location 2</Option>
              </Select>
            </div>
            <div>
              <AddBtn
                onClick={() => setIsModalOpenState(true)}
                blue
                bg
                pale
                title="SERVICE"
              />
              <AddBtn
                onClick={() => setIsModalOpenState(true)}
                blue
                bg
                pale
                title="BLOCK"
              />
              <AddBtn
                noIcon
                onClick={() => setIsModalOpenState(true)}
                blue
                bg
                pale
                title="PRINT LISTS"
              />
            </div>
          </div>

          <div className="schedule-control-section-wrap">
            <SchedularActivities />
          </div>
        </div>
      </CoursesLayout>
    </>
  );
};

export default CoursesSchedule;
