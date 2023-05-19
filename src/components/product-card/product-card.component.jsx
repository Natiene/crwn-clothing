import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

// import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
  ProductCardImg,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer className="product-card-container">
      <ProductCardImg src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
