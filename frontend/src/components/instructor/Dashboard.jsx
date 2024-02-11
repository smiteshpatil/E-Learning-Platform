import { useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="container-fluid px-0 py-0">
        <div className="row">
          <div className="col-md-2 col-12 px-0 py-0">
            <Sidebar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />
          </div>
          <div className="col-md-10 col-12 px-0 py-0">
            <Header OpenSidebar={OpenSidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
