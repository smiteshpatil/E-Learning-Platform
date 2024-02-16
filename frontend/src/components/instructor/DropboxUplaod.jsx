import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { uploadFileToDropbox } from "../../api/dropboxService";
import "react-toastify/dist/ReactToastify.css";

const DropboxUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  //sent video to dropbox
  const handleUpload = () => {
    uploadFileToDropbox(file);
  };

  return (
    <div className="col-sm-9">
      <input
        type="file"
        className="form-control"
        id="contentUrl"
        name="contentUrl"
        onChange={handleChange}
      />
      <button onClick={handleUpload}>Choose file</button>
      <ToastContainer />
    </div>
  );
};

export default DropboxUpload;
