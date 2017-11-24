import devicePixelRatio from 'utils/devicePixelRatio';
import InPlaceEditingPlaceholder from 'Components/InPlaceEditingPlaceholder';

function AuthorImage({ image }) {
  if (!image) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Select an image in the author page properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const croppedImage = image.get('blob').transform({
    width: 400 * devicePixelRatio(),
    height: 400 * devicePixelRatio(),
    fit: 'crop',
  });

  return (<img src={ croppedImage.url() } className="img-circle" />);
}

export default Scrivito.connect(AuthorImage);
