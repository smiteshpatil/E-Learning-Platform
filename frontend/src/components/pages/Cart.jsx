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
    <div className="course-content-section">
            <div className="course-container">
      <h1>Cart ({totalItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
          {item.quantity} x {item.title} &mdash;
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
              +
            </button>
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