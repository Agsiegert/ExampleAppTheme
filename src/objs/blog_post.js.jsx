const BlogPost = scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    title: 'string',
    body: 'widgetlist',
    publishedAt: 'date',
  },
});

scrivito.provideComponent(BlogPost, obj =>
  <div>
    <scrivito.React.Content tag="h1" content={ obj } attribute="title" />
    <scrivito.React.Content tag="div" content={ obj } attribute="body" />
  </div>
);

export default BlogPost;
