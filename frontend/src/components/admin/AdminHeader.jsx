import React from "react";
import { BsJustify } from "react-icons/bs";

function AdminHeader({ OpenSidebar }) {
  return (
    <header className="adminheader">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      {/* <h2>Instructor Dashbard</h2> */}
    </header>
  );
}

export default AdminHeader;
