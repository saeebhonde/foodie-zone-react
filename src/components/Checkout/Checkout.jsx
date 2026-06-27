import "./Checkout.css";

function Checkout({ cart, setShowCheckout, setShowCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} x {item.quantity} = ₹{item.price * item.quantity}
        </p>
      ))}

      <h2>Total: ₹{total}</h2>

      <button onClick={() => alert("Order Placed!")}>
        Place Order
      </button>

      <button onClick={() => setShowCheckout(false)}>
        Back
      </button>
    </div>
  );
}

export default Checkout;