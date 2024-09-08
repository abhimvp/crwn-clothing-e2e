// list put all the products available to shop
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";
// import ProductCard from "../../components/product-card/product-card.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {
        // Object.keys(categoriesMap) // gives array of all the key values
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }
    </Fragment>
  );
};

export default CategoriesPreview;
