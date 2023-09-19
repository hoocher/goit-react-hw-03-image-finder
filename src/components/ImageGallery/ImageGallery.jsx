import ImageGalleryItem from './ImageGalleryItem';
import { ULImageGallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ULImageGallery>
      {images &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
            tags={tags}
          />
        ))}
    </ULImageGallery>
  );
};

export default ImageGallery;
