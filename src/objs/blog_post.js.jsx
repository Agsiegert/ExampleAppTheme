const BaseBlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    author: 'reference',
    body: ['widgetlist', { only: 'SectionWidget' }],
    publishedAt: 'date',
    subtitle: 'string',
    tags: 'stringlist',
    title: 'string',
    titleImage: 'reference',
  },
});

class BlogPost extends BaseBlogPost {
  navigationOptions() {
    let backgroundImage = this.get('titleImage');
    if (!backgroundImage) {
      const blog = Scrivito.Obj.getByPermalink('blog');
      if (blog) {
        backgroundImage = blog.get('navigationBackgroundImage');
      }
    }

    return {
      navigationStyle: 'transparentDark',
      backgroundImage: backgroundImage || null,
      heigthClassName: null,
    };
  }
}

Scrivito.registerClass('BlogPost', BlogPost);

Scrivito.provideUiConfig(BlogPost, {
  title: 'BlogPost',
  description: 'A BlogPost.',
  attributes: {
    author: {
      title: 'Author',
      description: 'The author of the blogpost.',
    },
    publishedAt: {
      title: 'Published At',
      description: 'When will this BlogPost be published.',
    },
    titleImage: {
      title: 'Title image',
      description: 'The title image of the blogpost',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the blogpost',
    },
  },
  titleForContent: obj => obj.get('title'),
});

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
  const [newerPost] = BlogPost
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
  const [olderPost] = BlogPost
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

const AuthorPicture = Scrivito.createComponent(({ picture }) => {
  if (!picture) { return null; }
  const image = picture.get('blob').transform({ width: 200, height: 200, fit: 'crop' });

  return (<img src={ image.url } className="img-circle" />);
});

const BlogPostAuthor = Scrivito.createComponent(({ author }) => {
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
});

const BlogPostTagList = Scrivito.createComponent(({ tags }) =>
  <section className="bg-nav-content">
    <div className="container">
      <div className="nav-centered">
        <ul className="nav nav-pills">
          {
            tags.map(tag => <li key={ tag } role="presentation"><a href="#">{ tag }</a></li>)
          }
        </ul>
      </div>
    </div>
  </section>
);

const BlogPostMorePosts = Scrivito.createComponent(({ author }) => {
  if (!author) { return null; }
  if (author.objClass !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container gutter0">
        <h1 className="h2 border-bottom">More great blog posts from { author.get('name') }</h1>
      </div>
    </section>
  );
});

Scrivito.provideComponent(BlogPost, obj =>
  <div>
    <BlogPostNavigation currentPost={ obj }/>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.React.Content tag="h1" className="h2" content={ obj } attribute="title" />
        <Scrivito.React.Content tag="h2" className="h4" content={ obj } attribute="subtitle" />
      </div>
    </section>
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
    <BlogPostAuthor author={ obj.get('author') } />
    <BlogPostTagList tags={ obj.get('tags') } />
    <BlogPostMorePosts author={ obj.get('author') } />
  </div>
);

export default BlogPost;
