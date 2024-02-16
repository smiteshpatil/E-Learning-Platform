import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  content as courseContent,
  addContentService,
  deleteContentService,
} from "../../api/courseService";

import { getAllContentsByCourseId } from "../../api/contentService";
import CreateContent from "./CreateContent";
import ContentCard from "./ContentCard";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const UploadContentPage = () => {
  const navigate = useNavigate();
  let { authUser } = useAuth();
  //current courseId require for addContent
  let { courseId } = useParams();

  const [content, setContent] = useState([]);
  let token = localStorage.getItem("token");

  // Function to fetch contents
  const fetchContents = useCallback(async () => {
    try {
      if (authUser || localStorage.getItem("userObject")) {
        const resp = await getAllContentsByCourseId(courseId, token);
        setContent(resp.data);
      } else {
        toast.warning("please logIn to continue.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error, show toast
    }
  }, [authUser, courseId, navigate, token]);

  // Effect to fetch courses on component mount
  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

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
          {content && content.length > 0 ? (
            content.map((currContent, index) => (
              <ContentCard
                key={index}
                content={currContent}
                deleteContent={handleDeleteContent}
              />
            ))
          ) : (
            <>No lecture available in this course</>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadContentPage;
