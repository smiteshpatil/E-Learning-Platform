import React from "react";
import { BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      {/* <h2>Instructor Dashbard</h2> */}
    </header>
  );
}

export default Header;
