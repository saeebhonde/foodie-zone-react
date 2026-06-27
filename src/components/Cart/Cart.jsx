import "./Cart.css";

function Cart({ cart, increase, decrease, setShowCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>

            <div className="qty-box">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>

            <p>₹{item.price * item.quantity}</p>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
        Checkout 💳
      </button>
    </div>
  );
}

export default Cart;