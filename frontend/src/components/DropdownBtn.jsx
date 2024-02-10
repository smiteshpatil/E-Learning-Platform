import React from "react";

const DropdownBtn = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Login/Register
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Student
        </a>
        <a class="dropdown-item" href="#">
          Instructor
        </a>
        <a class="dropdown-item" href="#">
          Admin
        </a>
      </div>
    </div>
  );
};

export default DropdownBtn;
