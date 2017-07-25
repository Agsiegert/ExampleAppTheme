const Blog = Scrivito.createObjClass({
  name: 'Blog',
  attributes: {
    title: 'string',
    navigationBackgroundImage: 'reference',
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
    navigationBackgroundImage: {
      title: 'Navigation Background Image',
      description: 'The background image of the navigation',
    },
  },
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(Blog, obj =>
  <div>
    <section>
      <Scrivito.React.Content className="container" content={ obj } attribute="body" />
    </section>
  </div>
);

export default Blog;
