const Blog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
  },
});

Scrivito.provideComponent(Blog, obj =>
  <div>
    <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
  </div>
);

export default Blog;
