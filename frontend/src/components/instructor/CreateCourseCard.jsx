import React, { useState } from "react";

const CreateCourseCard = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Set the preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCreateCourse = () => {
    // Handle creating course here, you can use the values of courseName, courseDescription, and imageFile
    console.log("Creating course:", {
      courseName,
      courseDescription,
      imagePreview,
    });
  };

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="courseName">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description</label>
          <textarea
            className="form-control"
            id="courseDescription"
            rows="3"
            placeholder="Enter course description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="imageUpload">Course Poster </label> &nbsp;&nbsp;
          <input
            type="file"
            className="form-control-file"
            id="imageUpload"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            accept="image/*"
          />
          <label
            htmlFor="imageUpload"
            style={{
              backgroundColor: "#A0A0A0",
              padding: "2px 5px",
              color: "white",
            }}
          >
            choose file
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Course Preview"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          )}
        </div>
        <br />
        <button
          className="btn"
          style={{ color: "white", backgroundColor: "#582bd3" }}
          onClick={handleCreateCourse}
        >
          Create Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourseCard;
