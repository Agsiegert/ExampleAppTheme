import AuthorImage from 'Components/AuthorImage';

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
            <Scrivito.LinkTag to={ author }>
              <strong>{ author.get('name') }</strong>
            </Scrivito.LinkTag>
            <p>{ author.get('description') }</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostAuthor);
