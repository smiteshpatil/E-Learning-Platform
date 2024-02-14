import React, { useState, useEffect } from "react";
import { content as courseContent } from "../../api/courseService";
import CreateContent from "./CreateContent";
import ContentCard from "./ContentCard";

const UploadContentPage = (props) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simulate fetching content from server
    // Replace this with actual API call
    setContent(courseContent);
  }, []);

  const handleAddContent = (newContent) => {
    // Request server to upload the videos
    setContent([...content, newContent]);
  };

  return (
    <div className="container my-3 d-flex flex-column align-items-center">
      <h2 className="px-3 py-3 text-center">Upload Course Content</h2>
      <div className="w-100">
        <CreateContent createContent={handleAddContent} />
      </div>
      <div className="row justify-content-center">
        {content.length > 0 &&
          content.map((currContent, index) => (
            <ContentCard key={index} content={currContent} />
          ))}
      </div>
    </div>
  );
};

export default UploadContentPage;
