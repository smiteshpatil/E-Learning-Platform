import React, { useState } from "react";

const PublishQuestion = () => {
  const [question, setQuestion] = useState("");

  const handlePublish = () => {
    // Here you can implement logic to publish the question
    alert(`Question "${question}" published!`);
    // Clear the input after publishing
    setQuestion("");
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
