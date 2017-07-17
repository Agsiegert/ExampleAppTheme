const Blog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
  },
});

Scrivito.provideUiConfig(Blog, {
  title: 'Blog',
  description: 'A Blog.',
  attributes: {
    title: {
      title: 'Title',
      description: 'Description of title',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});

Scrivito.provideComponent(Blog, obj =>
  <div>
    <section>
      <div className="container">
        <div>
          <Scrivito.React.Content tag="h1" content={ obj } attribute="title" />
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
