import React from "react";
import { Link } from "react-router-dom";
const AddCourseContent = (props) => {
  let currCourse = props.course;

  const handleDeleteCourse = () => {
    console.log("deleting course with id: ", currCourse.id);
    props.deleteCourse(currCourse.id);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 px-2 py-2">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          {console.log(currCourse.imageUrl)}
          <img
            src={currCourse.imageUrl}
            className="card-img-top block"
            style={{ objectFit: "contain", width: "150%", height: "250px" }} // Set fixed height for the image
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{currCourse.courseName}</h5>
            <p className="card-text">
              {currCourse.description.split(" ").slice(0, 30).join(" ")}
            </p>
            <Link to={`/upload/${currCourse.id}`} className="btn btn-primary">
              Add content
            </Link>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/*  Modal  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Confirm course Deletion.
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              This action cannot be undone. Are you sure, you want to delete
              this course ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              &nbsp;
              <button
                onClick={handleDeleteCourse}
                data-bs-dismiss="modal"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourseContent;
