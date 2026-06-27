import { useState } from "react";
import products from "../../data/products";
import FoodCard from "../FoodCard/FoodCard";
import "./Menu.css";

function Menu({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div>
      <h2 className="menu-title">🍽 Our Menu</h2>

      <input
        className="search-box"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-box">
        {["All","Pizza","Burger","Fries","Pasta","Dessert","Drinks","Snack","Wrap"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {products
          .filter((item) =>
            (category === "All" || item.category === category) &&
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <FoodCard key={item.id} item={item} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
}

export default Menu;