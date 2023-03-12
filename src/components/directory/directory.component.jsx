import DirectoryItem from '../directory-item/directory-item.component'; 
import { DirectoryContainer } from './directory.styles';
// import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <DirectoryContainer className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
