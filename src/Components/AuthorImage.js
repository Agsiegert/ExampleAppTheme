import devicePixelRatio from 'utils/devicePixelRatio';

function AuthorImage({ image }) {
  if (!image) { return null; }

  const croppedImage = image.get('blob').transform({
    width: 400 * devicePixelRatio(),
    height: 400 * devicePixelRatio(),
    fit: 'crop',
  });

  return (<img src={ croppedImage.url() } className="img-circle" />);
}

export default Scrivito.connect(AuthorImage);
