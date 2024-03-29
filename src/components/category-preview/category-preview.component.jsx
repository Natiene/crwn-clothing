import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles";
// import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className="category-preview-container">
      <h2>
        <Title className="title" to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
