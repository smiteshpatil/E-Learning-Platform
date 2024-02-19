import { useAuth } from "../../context/AuthContext";

function Cart1() {
    const { cart, setCart, allCourses } = useAuth();
    if (cart === undefined) return <h1>Your cart is empty</h1>;

    const result = allCourses.filter((curr)=> cart.includes(curr.courseDTO.id));
    console.log(result);
    function removeCourse(id){
        const updatedCart = cart.filter(item => item !== id);
        setCart(updatedCart);
    }
    return (
      <>
      <h1>Cart ({cart.length})</h1>
      <div className="course-content-section">
          <div className="course-container">
            {result.map((curr) => (
              <div className="course-post" key={curr.courseDTO.id}>
                <img className="cover-img" src={curr.courseDTO.imageUrl} alt="" />
                <h2 className="title">{curr.courseDTO.courseName}</h2>
                <p className="description">{curr.courseDTO.courseDescription}</p>
                <button className="btn btn-danger" onClick={() => removeCourse(curr.courseDTO.id)}>&times;</button>
            </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function AppCart() {
    return (
        <Cart1 />
    );
  }
  export default AppCart;