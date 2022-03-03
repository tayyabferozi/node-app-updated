import React from "react";

import MainLayout from "../layouts/MainLayout";

const WorkshopLayout = ({ title, children, ...rest }) => {
  return (
    <MainLayout
      headVector="./assets/vectors/workshop.svg"
      activeLink="workshop"
      title={title || "Real-Time"}
      titleClassName="ms-2"
      tabData={{
        tabLinks: true,
        img: true,
        groupName: "workshop-tabs",
        tabs: [
          {
            to: "/workshop-realtime",
            icon: "./assets/vectors/realtime.svg",
            iconActive: "./assets/vectors/realtime-active.svg",
            target: "realtime",
          },
          {
            to: "/workshop-appointment",
            icon: "./assets/vectors/appointment.svg",
            iconActive: "./assets/vectors/appointment-active.svg",
            target: "appointment",
          },
          {
            to: "/workshop-requests",
            icon: "./assets/vectors/requests-2.svg",
            iconActive: "./assets/vectors/requests-2-active.svg",
            target: "requests",
          },
          {
            to: "/workshop-eye",
            icon: "./assets/vectors/eye.svg",
            iconActive: "./assets/vectors/eye-active.svg",
            target: "eye",
          },
          {
            to: "/workshop-storage",
            icon: "./assets/vectors/storage.svg",
            iconActive: "./assets/vectors/storage-active.svg",
            target: "storage",
          },
        ],
      }}
      {...rest}
    >
      <div id="workshop-main-content" className="mt-4 mt-sm-0">
        <div className="container-fluid px-0">
          {/* <WorkshopTabs /> */}

          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkshopLayout;
