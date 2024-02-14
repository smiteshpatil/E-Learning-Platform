import React from "react";
import { Link } from "react-router-dom";
const AddCourseContent = (props) => {
  //handle delete course
  const deleteCourse = () => {
    props.deleteCourse(props.course.id);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.course.title}</h5>
            <p className="card-text">{props.course.description}</p>
            <Link to="/courses/upload" className="btn btn-primary">
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
              <button
                onClick={deleteCourse}
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
