const Blog = scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
  },
});

scrivito.provideComponent(Blog, obj =>
  <div>
    <scrivito.React.Content tag="h1" content={ obj } attribute="title" />
  </div>
);

export default Blog;
