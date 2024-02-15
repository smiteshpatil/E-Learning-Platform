import React, { useState, useRef } from "react";

const ContentCard = (props) => {
  const [currContent, setCurrentContent] = useState({
    id: props.content.id,
    contentName: props.content.contentName,
    description: props.content.description,
  });

  //clear uploaded file
  const inputFile = useRef(null);

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
    console.log("In content Card: ", props.content.id);
    props.deleteContent(props.content.id);
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
      <div className="mb-3">
        <label htmlFor="contentUrl" className="form-label">
          upload new video
        </label>
        <input
          type="file"
          className="form-control"
          id="contentUrl"
          name="contentUrl"
          ref={inputFile}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleContentUpdate} className="btn btn-sm btn-warning">
        update
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
