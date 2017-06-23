const BlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    publishedAt: 'date',
  },
});

Scrivito.provideUiConfig(BlogPost, {
  title: 'BlogPost',
  description: 'A BlogPost.',
  attributes: {
    title: {
      title: 'Title',
      description: 'Description of title',
    },
    publishedAt: {
      title: 'Published At',
      description: 'When will this BlogPost be published.',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(BlogPost, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default BlogPost;
