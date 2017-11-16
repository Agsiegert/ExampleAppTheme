import AuthorImage from 'Components/AuthorImage';
import BlogPostMorePosts from 'Components/BlogPost/BlogPostMorePosts';

Scrivito.provideComponent('Author', ({ page }) =>
  [
    <section key="author" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-4">
            <AuthorImage image={ page.get('image') } />
          </div>
          <div className="col-md-10 col-sm-8 col-xs-8">
            <Scrivito.ContentTag content={ page } attribute="title" tag="h1" className="h1" />
            <Scrivito.ContentTag content={ page } attribute="description" tag="h2" className="h4" />
          </div>
        </div>
      </div>
    </section>,
    <BlogPostMorePosts key="moreBlogPosts" author={ page } />,
  ]
);