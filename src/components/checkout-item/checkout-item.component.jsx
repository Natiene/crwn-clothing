// import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemImg,
  ImageContainer,
  RemoveButton,
  StyledQuantity,
  StyledTitle,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer className="checkout-item-container">
      <ImageContainer className="image-container">
        <CheckoutItemImg src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <StyledTitle className="name">{name}</StyledTitle>
      <StyledQuantity className="quantity">
        <Arrow className="arrow" onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        {quantity}
        <Arrow className="arrow" onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </StyledQuantity>
      <StyledTitle className="price">{price}</StyledTitle>
      <RemoveButton className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
