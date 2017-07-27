import BlogPostDate from './blog_post_date';

const BlogPostNavigation = Scrivito.createComponent(({ currentPost }) => {
  if (!currentPost.get('publishedAt')) { return null; }

  return (
    <section className="bg-nav-content">
      <div className="container">
        <div className="nav-centered">
          <ul className="nav nav-pills">
            <li role="presentation">
              <BlogPostNextLink currentBlogPost={ currentPost } />
            </li>
            <li role="presentation">
              <BlogPostDate post={ currentPost } />
            </li>
            <li role="presentation">
              <BlogPostPreviousLink currentBlogPost={ currentPost } />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

const BlogPostNextLink = Scrivito.createComponent(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get('publishedAt');

  // find greater than publishedAt
  const [newerPost] = Scrivito.getClass('BlogPost')
    .where('publishedAt', 'isGreaterThan', currentDate)
    .order('publishedAt', 'asc')
    .batchSize(1);

  if (!newerPost) { return null; }

  return (
    <Scrivito.React.Link to={ newerPost }>
      Left (newer) button
    </Scrivito.React.Link>
  );
});

const BlogPostPreviousLink = Scrivito.createComponent(({ currentBlogPost }) => {
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
      Right (older) button
    </Scrivito.React.Link>
  );
});

export default BlogPostNavigation;
