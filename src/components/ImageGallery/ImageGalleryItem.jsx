import { LIImageGallery, ImageGalleryItemImage } from './ImageGallery.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <LIImageGallery>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </LIImageGallery>
  );
};

export default ImageGalleryItem;
