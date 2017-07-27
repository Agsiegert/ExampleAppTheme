import BlogPostDate from './blog_post_date';

const BlogPostTitleImage = Scrivito.createComponent(({ post }) => {
  const titleImage = post.get('titleImage');
  if (!titleImage) { return null; }

  const image = titleImage.get('blob').transform({ width: 1000 });

  return (<img src={ image.url } className="img-responsive" />);
});

const BlogPostPreview = Scrivito.createComponent(({ post }) => {
  return (
    <li>
      <BlogPostDate post={ post } />
      <div className="timeline-panel">
        <div className="timeline-body">
          <BlogPostTitleImage post={ post } />
          <h3>
            <Scrivito.React.Link to={ post }>
              { post.get('title') }
            </Scrivito.React.Link>
          </h3>
          <h4>{ post.get('subtitle') }</h4>
          <p>{ post.textExtract().substring(0, 300) }...</p>
        </div>
        <div className="timeline-footer">
          <Scrivito.React.Link to={ post } className="btn btn-clear">
            Read more<i className="fa fa-angle-right fa-4" aria-hidden="true"></i>
          </Scrivito.React.Link>
        </div>
      </div>
    </li>
  );
});

const BlogPostPreviewList = Scrivito.createComponent(({ blogPosts }) => {
  const posts = Array.from(blogPosts.order('publishedAt', 'desc'));

  return (
    <section className="bg-white no-padding">
      <div className="container gutter0">
        <ul className="timeline">
          <li className="timeline-divider"><time dateTime="2017-06">June 2017</time></li>
          {
            posts.map(post => <BlogPostPreview key={ post.id } post={ post } />)
          }
          <li className="clearfix" style={ { float: 'none' } }></li>
        </ul>
      </div>
    </section>
  );
});

export default BlogPostPreviewList;
