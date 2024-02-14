import React, { useState } from "react";

const ContentCard = (props) => {
  const [currContent, setCurrentContent] = useState({
    contentName: props.content.name,
    description: props.content.description,
  });

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentContent({ ...currContent, [name]: value });
  };

  //handle Content update
  const handleContentUpdate = () => {
    //api goes here
  };

  // Handle Delete Content
  const handleDeleteContent = () => {
    // API call goes here
  };

  return (
    <div
      className="col col-md-3 col-sm-12 mb-3 pb-3"
      style={{ backgroundColor: "ButtonFace", marginRight: "15px" }}
    >
      <div className="mb-3">
        <label htmlFor="contentName" className="form-label">
          Lecture Title
        </label>
        <input
          type="text"
          className="form-control"
          id="contentName"
          name="contentName"
          value={currContent.contentName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contentDesc" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="contentDesc"
          name="description"
          value={currContent.description}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleContentUpdate} className="btn btn-sm btn-warning">
        Edit
      </button>
      &nbsp;
      <button
        onClick={handleDeleteContent}
        className="btn btn-sm btn-outline-danger"
      >
        Delete
      </button>
      <br />
    </div>
  );
};

export default ContentCard;
