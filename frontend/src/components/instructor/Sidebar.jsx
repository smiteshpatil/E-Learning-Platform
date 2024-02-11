import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="courses">
            <BsFillArchiveFill className="icon" /> Courses
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="courses">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user/instructor/courses">
            <BsPeopleFill className="icon" /> Students
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user/instructor/courses">
            <BsListCheck className="icon" /> Inventory
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user/instructor/courses">
            <BsMenuButtonWideFill className="icon" /> Reports
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user/instructor/courses">
            <BsFillGearFill className="icon" /> Setting
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
