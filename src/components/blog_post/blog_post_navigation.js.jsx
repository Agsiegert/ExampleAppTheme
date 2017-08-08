import BlogPostDate from './blog_post_date';

const BlogPostNavigation = Scrivito.React.connect(({ currentPost }) => {
  if (!currentPost.get('publishedAt')) { return null; }

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered">
          <ul className="nav-blog">
            <li>
              <BlogPostNextLink currentBlogPost={ currentPost } />
            </li>
            <li>
              <span>
                <BlogPostDate post={ currentPost } />
              </span>
            </li>
            <li>
              <BlogPostPreviousLink currentBlogPost={ currentPost } />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

const BlogPostNextLink = Scrivito.React.connect(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get('publishedAt');

  // find greater than publishedAt
  const [newerPost] = Scrivito.getClass('BlogPost')
    .where('publishedAt', 'isGreaterThan', currentDate)
    .order('publishedAt', 'asc')
    .batchSize(1);

  if (!newerPost) { return null; }

  return (
    <Scrivito.React.Link to={ newerPost }>
      <i className="fa fa-chevron-circle-left  " aria-hidden="true"></i>
    </Scrivito.React.Link>
  );
});

const BlogPostPreviousLink = Scrivito.React.connect(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get('publishedAt');

  // find less than or equal publishedAt
  const [olderPost] = Scrivito.getClass('BlogPost')
    .all()
    .andNot('id', 'equals', currentBlogPost.id)
    .andNot('publishedAt', 'isGreaterThan', currentDate)
    .order('publishedAt', 'desc')
    .batchSize(1);

  if (!olderPost) { return null; }

  return (
    <Scrivito.React.Link to={ olderPost }>
      <i className="fa fa-chevron-circle-right " aria-hidden="true"></i>
    </Scrivito.React.Link>
  );
});

export default BlogPostNavigation;
