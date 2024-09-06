import "./product-card.styles.scss";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { setIsCartOpen } = useContext(CartContext);
  const addItemsToCart = () => {
    console.log("add to cart");
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`product-image-${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemsToCart}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
