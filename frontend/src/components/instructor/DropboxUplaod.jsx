import React, { useState } from "react";
import { uploadFileToDropbox } from "../../api/dropboxService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const DropboxUpload = (props) => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  //sent video to server and set url and path
  const handleUpload = async () => {
    <ToastContainer />;
    let [url, path] = await toast.promise(uploadFileToDropbox(file), {
      pending: "Uploading video...",
      success: "Video uploaded successfully",
      error: "err uploading videos",
    });
    props.setUrl(url, path);
  };

  return (
    <div className="col-sm-9">
      <input
        type="file"
        className="form-control-file"
        id="contentUrl"
        name="contentUrl"
        onChange={handleChange}
      />
      <button className="btn-sm btn" onClick={handleUpload}>
        Upload video
      </button>
    </div>
  );
};

export default DropboxUpload;
