import { useState } from "react";
import "./AdminDashboard.css";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [openAdminSidebarToggle, setOpenAdminSidebarToggle] = useState(false);

  const OpenAdminSidebar = () => {
    setOpenAdminSidebarToggle(!openAdminSidebarToggle);
  };

  return (
    <>
      <div className="container-fluid py-0">
        <div className="row">
          <div className="col-md-2 col-12 ">
            <AdminSidebar
              openAdminSidebarToggle={openAdminSidebarToggle}
              OpenAdminSidebar={OpenAdminSidebar}
            />
          </div>
          <div className="col-md-10 col-12">
            <AdminHeader OpenAdminSidebar={OpenAdminSidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
