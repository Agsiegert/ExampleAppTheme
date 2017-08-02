function BlogPostAuthor({ author }) {
  if (!author) { return null; }
  if (author.objClass !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-1 col-sm-4 col-xs-4">
            <AuthorPicture picture={ author.get('picture') }/>
          </div>
          <div className="col-md-11 col-sm-8 col-xs-8">
            <Scrivito.React.Content content={ author } attribute="name" tag="strong" />
            <Scrivito.React.Content content={ author } attribute="description" tag="p" />
          </div>
        </div>
      </div>
    </section>
  );
}

const AuthorPicture = Scrivito.React.connect(({ picture }) => {
  if (!picture) { return null; }
  const image = picture.get('blob').transform({ width: 200, height: 200, fit: 'crop' });

  return (<img src={ image.url } className="img-circle" />);
});

export default Scrivito.React.connect(BlogPostAuthor);
