import React from "react";
import MainLayout from "../layouts/MainLayout";

const DashboardLayout = ({ title, children }) => {
  return (
    <MainLayout
      title={title}
      activeLink="elevate"
      tabData={{
        img: true,
        tabLinks: true,
        tabGroupName: "dashboard-tabs",
        data: [
          {
            icon: "./assets/vectors/dashboard.svg",
            iconActive: "./assets/vectors/dashboard-active.svg",
            target: "dashboard",
            to: "/business-360",
          },
          {
            icon: "./assets/vectors/finances.svg",
            iconActive: "./assets/vectors/finances-active.svg",
            target: "finances",
            to: "/finances-overview",
          },
        ],
      }}
    >
      {children}
    </MainLayout>
  );
};

export default DashboardLayout;
