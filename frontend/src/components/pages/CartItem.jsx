import { IoMdRemoveCircle } from "react-icons/io";
const CartItem = (props) => {
    const handleRemove = () => {
        console.log("Removing course with ID:", props.course.id);
        props.onRemove(props.course.id);
      };
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.course.imageUrl} className="img-fluid" alt="" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{props.course.courseName}</h5>
              <p className="card-text">{props.course.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <button onClick={handleRemove}><IoMdRemoveCircle /></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;