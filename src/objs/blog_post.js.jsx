const BaseBlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    author: 'reference',
    body: 'widgetlist',
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

const BlogDate = Scrivito.createComponent(({ date }) => {
  if (!date) { return null; }
  const month = date.getMonth() + 1; // getMonth return 0 to 11.
  const dayOfMonth = date.getDate(); // getDate returns 1 to 31.

  return (
    <div>
      { twoDigitNumber(month) }/{ twoDigitNumber(dayOfMonth) }
    </div>
  );
});

const BlogNav = Scrivito.createComponent(({ post }) =>
  <section className="bg-nav-content">
    <div className="container">
      <div className="nav-centered">
        <ul className="nav nav-pills">
          <li role="presentation"><a href="#">Left button</a></li>
          <li role="presentation"><BlogDate date={ post.get('publishedAt') } /></li>
          <li role="presentation"><a href="#">Right button</a></li>
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

const AuthorComponent = Scrivito.createComponent(({ author }) => {
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

const TagListComponent = Scrivito.createComponent(({ tags }) =>
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

const MoreBlogPostsComponent = Scrivito.createComponent(({ author }) => {
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
    <BlogNav post={ obj }/>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.React.Content tag="h1" className="h2" content={ obj } attribute="title" />
        <Scrivito.React.Content tag="h2" className="h4" content={ obj } attribute="subtitle" />
      </div>
    </section>
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
    <AuthorComponent author={ obj.get('author') } />
    <TagListComponent tags={ obj.get('tags') } />
    <MoreBlogPostsComponent author={ obj.get('author') } />
  </div>
);

export default BlogPost;
