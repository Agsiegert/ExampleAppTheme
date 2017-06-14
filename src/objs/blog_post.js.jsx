const BlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    publishedAt: 'date',
  },
});

Scrivito.provideComponent(BlogPost, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <Scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default BlogPost;
