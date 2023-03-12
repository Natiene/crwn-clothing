// import './directory-item.styles.scss'

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  Text,
  Title,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer className="directory-item-container">
      <BackgroundImage
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Body className="body">
        <Title>{title}</Title>
        <Text>Shop Now</Text>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
