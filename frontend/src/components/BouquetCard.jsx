function BouquetCard({ name, price, emoji, image, onAddToCart }) {
  return (
    <div className="bouquet-card">

      <div className="bouquet-image">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>

      <p>Rs. {price}</p>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default BouquetCard;