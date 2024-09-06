// list put all the products available to shop

import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { shopProducts } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {shopProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
