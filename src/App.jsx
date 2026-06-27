import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // ➕ ADD TO CART
  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // ➕ INCREASE
  const increase = (id) => {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // ➖ DECREASE
  const decrease = (id) => {
    setCart(
      cart
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <div className="app">

      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        setShowCart={setShowCart}
      />

      <div className="container">
        {showCart ? (
          showCheckout ? (
            <Checkout
              cart={cart}
              setShowCheckout={setShowCheckout}
              setShowCart={setShowCart}
            />
          ) : (
            <Cart
              cart={cart}
              increase={increase}
              decrease={decrease}
              setShowCheckout={setShowCheckout}
              setShowCart={setShowCart}
            />
          )
        ) : (
          <Menu addToCart={addToCart} />
        )}
      </div>

    </div>
  );
}

export default App;