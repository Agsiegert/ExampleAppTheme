const Blog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
    titleImage: 'reference',
    body: 'widgetlist',
  },
});

Scrivito.provideUiConfig(Blog, {
  title: 'Blog',
  description: 'A Blog.',
  attributes: {
    title: {
      title: 'Title',
      description: 'Title of the blog. Only used for the navigation',
    },
    titleImage: {
      title: 'Title image',
      description: 'The title image of the blogpost',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Blog, obj =>
  <div>
    <Scrivito.React.Image src={ obj } attribute="titleImage" />
    <section>
      <Scrivito.React.Content className="container" content={ obj } attribute="body" />
    </section>
  </div>
);

export default Blog;
