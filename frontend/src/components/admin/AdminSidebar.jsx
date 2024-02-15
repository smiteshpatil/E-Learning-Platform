import React from "react";
import {
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsGrid1X2Fill,
    BsPeopleFill
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
      style={{ minHeight: "705px" }}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="studentController">
            <BsFillArchiveFill className="icon" /> Students
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="instructorController">
            <BsFillGrid3X3GapFill className="icon" /> Instructors
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="courseController">
            <BsPeopleFill className="icon" /> Courses
          </NavLink>
        </li>

      </ul>
      
      
    </aside>
  );
}

export default AdminSidebar;
