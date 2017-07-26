const BlogPostNavigation = Scrivito.createComponent(({ currentPost }) =>
  <section className="bg-nav-content">
    <div className="container">
      <div className="nav-centered">
        <ul className="nav nav-pills">
          <li role="presentation">
            <BlogPostNextLink currentBlogPost={ currentPost } />
          </li>
          <li role="presentation">
            <BlogPostDate date={ currentPost.get('publishedAt') } />
          </li>
          <li role="presentation">
            <BlogPostPreviousLink currentBlogPost={ currentPost } />
          </li>
        </ul>
      </div>
    </div>
  </section>
);

function twoDigitNumber(number) {
  return (`0${number}`).slice(-2);
}

const BlogPostDate = Scrivito.createComponent(({ date }) => {
  if (!date) { return null; }
  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.

  return (
    <time dateTime={ date.toISOString() }>
      { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }
    </time>
  );
});

const BlogPostNextLink = Scrivito.createComponent(({ currentBlogPost }) => {
  const currentDate = currentBlogPost.get('publishedAt');
  if (!currentDate) { return null; }

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
  if (!currentDate) { return null; }

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
