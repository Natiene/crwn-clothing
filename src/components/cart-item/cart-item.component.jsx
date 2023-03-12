// import "./card-item.styles.scss";

import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  StyledSpan,
} from "./card-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer className="cart-item-container">
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <StyledSpan className="name">{name}</StyledSpan>
        <StyledSpan className="price">
          {quantity} x ${price}
        </StyledSpan>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
