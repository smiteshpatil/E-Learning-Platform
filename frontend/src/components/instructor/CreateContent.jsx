import React, { useState, useRef } from "react";

const CreateContent = (props) => {
  const [currContent, setCurrContent] = useState({
    contentName: "",
    description: "",
    contentUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputFile = useRef(null);

  const handleAddContent = () => {
    props.createContent(currContent);
  };

  const handleCancel = () => {
    setCurrContent({
      contentName: "",
      description: "",
      contentUrl: "",
    });

    if (inputFile.current) {
      inputFile.current.value = ""; // Reset the value of the file input
    }
  };

  return (
    <div className="container my-0 px-3 py-3" style={{ maxWidth: "80%" }}>
      <div className="row mb-3">
        <label htmlFor="contentName" className="col-sm-3 col-form-label">
          Lecture Title
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            id="contentName"
            name="contentName"
            value={currContent.contentName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="description" className="col-sm-3 col-form-label">
          Description
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            id="description"
            name="description"
            value={currContent.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="contentUrl" className="col-sm-3 col-form-label">
          Upload Video
        </label>
        <div className="col-sm-9">
          <input
            type="file"
            className="form-control"
            id="contentUrl"
            name="contentUrl"
            ref={inputFile}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <button onClick={handleAddContent} className="btn btn-primary btn-sm">
          Add Video
        </button>
        &nbsp;
        <button onClick={handleCancel} className="btn btn-secondary btn-sm">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateContent;
