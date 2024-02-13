import React, { useState } from "react";

const CreateCourseCard = (props) => {
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    category: "",
    description: "",
    skillLevel: "",
    language: "",
    price: "",
    coursePoster: "", // Adding coursePoster as a string
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Set the preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // Add coursePoster file in the newCourse
      console.log(reader.result);
      setNewCourse({
        ...newCourse,
        coursePoster: JSON.stringify(reader.result),
      }); // Set coursePoster as base64 string
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleCreateCourse = () => {
    // Handle creating course here, you can use the values of courseName, description, and imageFile
    console.log("Creating course:");
    console.log(newCourse);
    props.createCourse(newCourse);
  };

  return (
    <div
      className="container py-4 px-4"
      style={{ maxWidth: "80%", margin: "auto", backgroundColor: "beige" }}
    >
      <div className="card-body">
        <div className="row mb-3">
          <label
            htmlFor="courseName"
            className="col-md-3 col-form-label text-md-end"
          >
            Course Name
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              placeholder="Enter course name"
              value={newCourse.courseName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="description"
            className="col-md-3 col-form-label text-md-end"
          >
            Course Description
          </label>
          <div className="col-md-9">
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              placeholder="Enter course description"
              value={newCourse.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="imageUpload"
            className="col-md-3 col-form-label text-md-end"
          >
            Course Poster
          </label>
          <div className="col-md-9">
            <input
              type="file"
              className="form-control-file"
              id="imageUpload"
              name="coursePoster"
              onChange={handleImageUpload}
              accept="image/*"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Course Preview"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="category"
            className="col-md-3 col-form-label text-md-end"
          >
            Select Category
          </label>
          <div className="col-md-9">
            <select
              className="form-select"
              name="category"
              id="category"
              defaultValue="development"
              value={newCourse.category} // Set value from state
              onChange={handleChange} // Add onChange handler
            >
              <option value="development">Development</option>
              <option value="finance">Finance</option>
              <option value="business">Business</option>
              <option value="digitalMarketing">Digital Marketing</option>
              <option value="graphicsDesign">Graphics Design</option>
              <option value="entrepreneurship">Entrepreneurship</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="language"
            className="col-md-3 col-form-label text-md-end"
          >
            Select Language
          </label>
          <div className="col-md-9">
            <select
              className="form-select"
              name="language"
              id="language"
              defaultValue="english"
              value={newCourse.language} // Set value from state
              onChange={handleChange} // Add onChange handler
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="skillLevel"
            className="col-md-3 col-form-label text-md-end"
          >
            Select Level
          </label>
          <div className="col-md-9">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="skillLevel"
                id="inlineRadio1"
                value="beginner"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Beginner
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="skillLevel"
                id="inlineRadio2"
                value="intermediate"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Intermediate
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="skillLevel"
                id="inlineRadio3"
                value="advanced"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Advanced
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="price"
            className="col-md-3 col-form-label text-md-end"
          >
            Course Price
          </label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="eg: 499"
              value={newCourse.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <button
              className="btn"
              style={{
                color: "white",
                backgroundColor: "#582bd3",
                marginRight: "10px",
              }}
              onClick={handleCreateCourse}
            >
              Create Course
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={handleCreateCourse}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseCard;
