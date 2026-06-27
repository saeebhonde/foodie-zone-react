import "./FoodCard.css";

const FoodCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;