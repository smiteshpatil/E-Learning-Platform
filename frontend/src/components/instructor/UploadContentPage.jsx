import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  content as courseContent,
  addContentService,
  deleteContentService,
} from "../../api/courseService";
import CreateContent from "./CreateContent";
import ContentCard from "./ContentCard";

const UploadContentPage = (props) => {
  //current courseId require for addContent
  let { id } = useParams();

  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simulate fetching content from server
    // Replace this with actual API call
    setContent(courseContent);
  }, []);

  const handleAddContent = (newContent) => {
    // Request server to upload the videos
    addContentService(newContent);
  };

  //hadleDeleteContent
  const handleDeleteContent = (contentId) => {
    deleteContentService(contentId);
    setContent((prevContent) =>
      prevContent.filter((curr) => curr.id !== contentId)
    );
  };

  return (
    <>
      <div className="container my-3 d-flex flex-column align-items-center">
        <h2 className="px-3 py-3 text-center">Upload Course Content</h2>
        <div className="w-100">
          <CreateContent createContent={handleAddContent} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {content.length > 0 &&
            content.map((currContent, index) => (
              <ContentCard
                key={index}
                content={currContent}
                deleteContent={handleDeleteContent}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default UploadContentPage;
