import "./Navbar.css";

function Navbar({ cartCount, setShowCart }) {
  return (
    <nav className="navbar">
      <h2 className="logo">🍔 Foodie Zone</h2>

      <div className="nav-buttons">
        <button onClick={() => setShowCart(false)}>Home</button>

        <button onClick={() => setShowCart(true)}>
          Cart 🛒 ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;