import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h1>Your cart is empty</h1>;

  return (
    <>
    <h1>Cart ({totalItems})</h1>
    <div className="course-content-section">
        <div className="course-container">
          {items.map((currentCourse) => (
            <div className="course-post" key={currentCourse.id}>
              <img className="cover-img" src={currentCourse.thumbnail} alt="" />
              <h2 className="title">{currentCourse.title}</h2>
              <p className="description">{currentCourse.description}</p>
              
              <button className="btn btn-danger" onClick={() => removeItem(currentCourse.id)}>&times;</button>
            </div>
          ))}
        </div>
      </div>
    <div className="course-content-section">
            <div className="course-container">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
          {item.quantity} x {item.title} &mdash;
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
}

function AppCart() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}
export default AppCart;