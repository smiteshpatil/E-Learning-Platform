import React, { useState } from "react";
import DropboxUpload from "./DropboxUplaod";
import { addNewContent } from "../../api/contentService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const CreateContent = (props) => {
  let { courseId } = useParams();
  let token = localStorage.getItem("token");
  const [currContent, setCurrContent] = useState({
    courseId: courseId,
    contentNo: "",
    contentName: "",
    contentDescription: "",
    // contentPath: "",
    contentUrl: "",
  });

  // passing this down to file uploading component
  const setUrlAndPath = (url, path) => {
    console.log("CreateContent contentUrl:", url);
    setCurrContent({ ...currContent, contentUrl: url, contentPath: path });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // save content to db
  const handleAddContent = async () => {
    if (currContent.contentUrl !== "") {
      addNewContent(currContent, token);
      //update the state in parent for rerender
      props.refresh((prev) => !prev);
    } else {
      toast.warning("Please upload video !");
    }
  };

  const handleCancel = () => {
    setCurrContent({
      contentNo: "",
      contentName: "",
      contentDescription: "",
      contentUrl: "",
      contentPath: "",
    });
    // call dropbox api to delete file with path=contentPath
  };

  return (
    <div className="container my-0 px-3 py-3" style={{ maxWidth: "80%" }}>
      <div className="row mb-3">
        <label htmlFor="contentNo" className="col-sm-3 col-form-label">
          Lecture No:
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            id="contentNo"
            name="contentNo"
            value={currContent.contentNo}
            onChange={handleChange}
          />
        </div>
      </div>
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
        <label htmlFor="contentDescription" className="col-sm-3 col-form-label">
          Description
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            id="contentDescription"
            name="contentDescription"
            value={currContent.contentDescription}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="contentUrl" className="col-sm-3 col-form-label">
          Upload Video
        </label>
        <DropboxUpload setUrl={setUrlAndPath} />
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
