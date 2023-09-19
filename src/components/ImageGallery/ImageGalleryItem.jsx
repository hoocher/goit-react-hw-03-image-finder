import { LIImageGallery, ImageGalleryItemImage } from './ImageGallery.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
  return (
    <LIImageGallery>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </LIImageGallery>
  );
};

export default ImageGalleryItem;
