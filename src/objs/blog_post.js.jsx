const BlogPost = Scrivito.createObjClass({
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
  <div>
    <Scrivito.React.Image src={ post } attribute="titleImage" />
    <BlogDate date={ post.get('publishedAt') } />
  </div>
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
    <div className="row">
      <div className="col-md-1 col-sm-4 col-xs-4">
        <AuthorPicture picture={ author.get('picture') }/>
      </div>
      <div className="col-md-11 col-sm-8 col-xs-8">
        <Scrivito.React.Content content={ author } attribute="name" className='h4' />
        <Scrivito.React.Content content={ author } attribute="description" />
      </div>
    </div>
  );
});

const TagList = Scrivito.createComponent(({ tags }) =>
  <div>
    {
      tags.map(tag => <span key={ tag }>{ tag } </span>)
    }
  </div>
);

Scrivito.provideComponent(BlogPost, obj =>
  <div className='no-padding'>
    <BlogNav post={ obj }/>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.React.Content tag="h1" className="h2" content={ obj } attribute="title" />
        <Scrivito.React.Content tag="h2" className="h4" content={ obj } attribute="subtitle" />
        <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
        <hr />
        <AuthorComponent author={ obj.get('author') } />
        <hr />
        <TagList tags={ obj.get('tags') } />
      </div>
    </section>
  </div>
);

export default BlogPost;
