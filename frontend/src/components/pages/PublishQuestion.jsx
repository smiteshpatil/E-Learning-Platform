import React, { useState } from "react";
import { publishNewQuestion } from "../../api/contentService";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
const PublishQuestion = () => {
  let { courseId } = useParams();
  console.log(courseId);
  const [question, setQuestion] = useState("");

  const handlePublish = () => {
    if (question !== "") {
      toast.promise(
        publishNewQuestion(courseId, question, localStorage.getItem("token")),
        {
          success: "your question is sent",
          pending: "uploading...",
          error: "error sending question",
        }
      );
      setQuestion("");
    } else {
      toast.error("question cannot be empty");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <textarea
        rows={4}
        cols={50}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        style={{ resize: "none", marginBottom: "10px" }}
      ></textarea>
      <br />
      <button
        style={{ color: "white", backgroundColor: "#582bd3" }}
        className="btn"
        onClick={handlePublish}
      >
        Publish
      </button>
    </div>
  );
};

export default PublishQuestion;
