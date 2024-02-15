import React, { useState } from "react";
import DropboxUpload from "./DropboxUplaod";

const CreateContent = (props) => {
  const [currContent, setCurrContent] = useState({
    contentName: "",
    description: "",
    contentPath: "",
    contentUrl: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddContent = async () => {
    // const videoUrl = await uploadFile(currContent.contentUrl);
  };

  const handleCancel = () => {
    setCurrContent({
      contentName: "",
      description: "",
      contentUrl: "",
    });
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
        <DropboxUpload />
      </div>
      <div className="text-center mb-4">
        <button onClick={handleAddContent} className="btn btn-primary btn-sm">
          Add Lecture
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
