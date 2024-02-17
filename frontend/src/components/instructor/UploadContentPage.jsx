import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  let token = localStorage.getItem("token");

  const [contents, setContents] = useState([]);
  const [flag, setFlag] = useState(false); // flag to make rerender
  const refresh = () => {
    setFlag((flag) => !flag);
  };

  // Function to fetch contents
  const fetchContents = async () => {
    try {
      if (authUser || localStorage.getItem("userObject")) {
        const resp = await getAllContentsByCourseId(courseId, token);
        setContents(resp.data);
      } else {
        toast.warning("session lost. please logIn to continue.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error, show toast
    }
  };

  // Effect to fetch courses on component mount
  useEffect(() => {
    fetchContents();
  }, [flag]);

  return (
    <>
      <div className="container my-3 d-flex flex-column align-items-center border  border-secondary">
        <h2 className="px-3 py-3 text-center">Upload Course Content</h2>
        <div className="w-100">
          <CreateContent
            setNewContents={setContents}
            refresh={refresh}
            currCourseId={courseId}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {contents && contents.length > 0 ? (
            contents.map((currContent, index) => (
              <ContentCard
                key={index}
                refresh={refresh}
                currContentDetails={currContent}
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
