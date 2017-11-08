import devicePixelRatio from 'utils/device_pixel_ratio';

function BlogPostAuthor({ author }) {
  if (!author) { return null; }
  if (author.objClass() !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-1 col-sm-4 col-xs-4">
            <AuthorImage image={ author.get('image') }/>
          </div>
          <div className="col-md-11 col-sm-8 col-xs-8">
            <Scrivito.ContentTag content={ author } attribute="name" tag="strong" />
            <Scrivito.ContentTag content={ author } attribute="description" tag="p" />
          </div>
        </div>
      </div>
    </section>
  );
}

const AuthorImage = Scrivito.connect(({ image }) => {
  if (!image) { return null; }
  const croppedImage = image.get('blob').transform({
    width: 200 * devicePixelRatio(),
    height: 200 * devicePixelRatio(),
    fit: 'crop',
  });

  return (<img src={ croppedImage.url() } className="img-circle" />);
});

export default Scrivito.connect(BlogPostAuthor);
