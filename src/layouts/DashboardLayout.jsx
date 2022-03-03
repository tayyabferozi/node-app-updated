import React from "react";
import MainLayout from "../layouts/MainLayout";

const DashboardLayout = ({ title, children, ...rest }) => {
  return (
    <MainLayout
      tabData={{
        img: true,
        tabGroupName: "feed-tabs",
        tabLinks: true,
        data: [
          {
            to: "/business-360",
            icon: "./assets/vectors/business-360.svg",
            iconActive: "./assets/vectors/business-360-active.svg",
            target: "conversations",
          },
          {
            to: "/finances-overview",
            icon: "./assets/vectors/finances-board.svg",
            iconActive: "./assets/vectors/finances-board-active.svg",
            target: "feed",
          },
        ],
      }}
      title={title}
      activeLink="elevate"
      {...rest}
    >
      {children}
    </MainLayout>
  );
};

export default DashboardLayout;
